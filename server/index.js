const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');

dotenv.config();

const app = express();
const port = Number(process.env.PORT) || 3001;

const frontendOrigin = process.env.FRONTEND_ORIGIN || 'http://localhost:3000';
const contactRecipient = process.env.CONTACT_TO || 'info@angelorenovates.be';
const graphTenantId = process.env.GRAPH_TENANT_ID || '';
const graphClientId = process.env.GRAPH_CLIENT_ID || '';
const graphClientSecret = process.env.GRAPH_CLIENT_SECRET || '';
const graphSender = process.env.GRAPH_SENDER || '';
const graphApiBaseUrl = process.env.GRAPH_API_BASE_URL || 'https://graph.microsoft.com/v1.0';
const smtpHost = process.env.SMTP_HOST || 'smtp-mail.outlook.com';
const smtpPort = Number(process.env.SMTP_PORT || 587);
const smtpUser = process.env.SMTP_USER || '';
const smtpPass = process.env.SMTP_PASS || '';
const smtpFrom = process.env.SMTP_FROM || smtpUser;
const smtpSecure = process.env.SMTP_SECURE === 'true';

const hasGraphConfig = Boolean(graphTenantId && graphClientId && graphClientSecret && graphSender);
const hasSmtpConfig = Boolean(smtpUser && smtpPass);
const mailProvider = hasGraphConfig ? 'graph' : hasSmtpConfig ? 'smtp' : 'none';
const graphTokenEndpoint = graphTenantId
  ? `https://login.microsoftonline.com/${encodeURIComponent(graphTenantId)}/oauth2/v2.0/token`
  : '';

const graphTokenCache = {
  accessToken: '',
  expiresAt: 0,
};

let transporter = null;
if (hasSmtpConfig) {
  transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpSecure,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });
}

function createMailError(code, message, status = 500, details = '') {
  const error = new Error(message);
  error.code = code;
  error.status = status;
  error.details = details;
  return error;
}

async function getGraphAccessToken() {
  const now = Date.now();
  if (graphTokenCache.accessToken && graphTokenCache.expiresAt - now > 60_000) {
    return graphTokenCache.accessToken;
  }

  const body = new URLSearchParams({
    client_id: graphClientId,
    client_secret: graphClientSecret,
    scope: 'https://graph.microsoft.com/.default',
    grant_type: 'client_credentials',
  });

  const response = await fetch(graphTokenEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body,
  });

  const data = await response.json().catch(() => null);

  if (!response.ok || !data?.access_token) {
    const details =
      data?.error_description ||
      data?.error?.message ||
      data?.error ||
      'Kon geen Microsoft Graph access token ophalen.';

    throw createMailError(
      'EGRAPH_TOKEN',
      'Microsoft Graph authenticatie mislukt.',
      response.status || 500,
      details,
    );
  }

  graphTokenCache.accessToken = data.access_token;
  graphTokenCache.expiresAt = now + Math.max((Number(data.expires_in) || 3600) - 300, 60) * 1000;

  return graphTokenCache.accessToken;
}

app.use(
  cors({
    origin: frontendOrigin,
  }),
);
app.use(express.json({ limit: '1mb' }));

function sanitizeField(value) {
  return typeof value === 'string' ? value.trim() : '';
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function getTransportErrorMessage(error) {
  const response = typeof error?.response === 'string' ? error.response : '';
  const details = typeof error?.details === 'string' ? error.details : '';

  if (error?.code === 'EAUTH' && response.includes('disabled for the Tenant')) {
    return 'SMTP-login is geblokkeerd voor de Microsoft 365-tenant. Schakel tenant-brede SMTP AUTH in of zet Security Defaults uit in Microsoft 365.';
  }

  if (error?.code === 'EAUTH' && response.includes('SmtpClientAuthentication is disabled')) {
    return 'SMTP-login is geblokkeerd. Activeer SMTP AUTH voor deze mailbox of gebruik een ander SMTP-account met app-wachtwoord.';
  }

  if (error?.code === 'EAUTH') {
    return 'SMTP-login mislukt. Controleer SMTP_USER/SMTP_PASS en gebruik indien nodig een app-wachtwoord.';
  }

  if (error?.code === 'ESOCKET') {
    return 'Kan geen verbinding maken met de mailserver. Controleer SMTP_HOST, SMTP_PORT en SMTP_SECURE.';
  }

  if (error?.code === 'EGRAPH_TOKEN') {
    return 'Microsoft Graph authenticatie mislukt. Controleer GRAPH_TENANT_ID, GRAPH_CLIENT_ID, GRAPH_CLIENT_SECRET en admin consent voor Mail.Send.';
  }

  if (error?.code === 'EGRAPH_SEND' && details.includes('ErrorAccessDenied')) {
    return 'Microsoft Graph heeft geen toestemming om mail te versturen. Controleer Mail.Send application permission en admin consent.';
  }

  if (error?.code === 'EGRAPH_SEND' && details.includes('MailboxNotEnabledForRESTAPI')) {
    return 'Deze mailbox kan niet via Microsoft Graph verzenden. Controleer of GRAPH_SENDER een geldige Microsoft 365 mailbox met licentie is.';
  }

  if (error?.code === 'EGRAPH_SEND') {
    return 'Verzenden via Microsoft Graph mislukt. Controleer GRAPH_SENDER, de Graph permissies en de mailboxconfiguratie.';
  }

  return 'Verzenden mislukt. Probeer later opnieuw.';
}

async function sendViaGraph({ email, subject, html }) {
  const accessToken = await getGraphAccessToken();
  const response = await fetch(`${graphApiBaseUrl}/users/${encodeURIComponent(graphSender)}/sendMail`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message: {
        subject,
        body: {
          contentType: 'HTML',
          content: html,
        },
        toRecipients: [
          {
            emailAddress: {
              address: contactRecipient,
            },
          },
        ],
        replyTo: [
          {
            emailAddress: {
              address: email,
            },
          },
        ],
      },
      saveToSentItems: true,
    }),
  });

  if (response.status === 202) {
    return;
  }

  const data = await response.json().catch(() => null);
  const details =
    data?.error?.code ||
    data?.error?.message ||
    `Microsoft Graph sendMail gaf status ${response.status}.`;

  throw createMailError('EGRAPH_SEND', 'Microsoft Graph sendMail mislukt.', response.status, details);
}

async function sendViaSmtp({ email, subject, text, html }) {
  await transporter.sendMail({
    from: smtpFrom,
    to: contactRecipient,
    replyTo: email,
    subject,
    text,
    html,
  });
}

async function sendContactEmail(payload) {
  if (mailProvider === 'graph') {
    return sendViaGraph(payload);
  }

  if (mailProvider === 'smtp' && transporter) {
    return sendViaSmtp(payload);
  }

  throw createMailError('EMAIL_NOT_CONFIGURED', 'Mailserver is nog niet geconfigureerd.');
}

app.get('/api/health', (_req, res) => {
  res.json({
    ok: true,
    mailProvider,
    graphConfigured: hasGraphConfig,
    smtpConfigured: hasSmtpConfig,
  });
});

app.post('/api/contact', async (req, res) => {
  const name = sanitizeField(req.body?.name);
  const email = sanitizeField(req.body?.email);
  const phone = sanitizeField(req.body?.phone);
  const message = sanitizeField(req.body?.message);

  if (!name || !email || !message) {
    return res.status(400).json({
      message: 'Naam, e-mail en bericht zijn verplicht.',
    });
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({
      message: 'Geef een geldig e-mailadres op.',
    });
  }

  if (mailProvider === 'none') {
    return res.status(500).json({
      message: 'Mailserver is nog niet geconfigureerd.',
    });
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone || 'Niet opgegeven');
  const safeMessage = escapeHtml(message).replaceAll('\n', '<br />');
  const subject = `Nieuwe contactaanvraag van ${name}`;
  const text = [
    `Naam: ${name}`,
    `E-mail: ${email}`,
    `Telefoon: ${phone || 'Niet opgegeven'}`,
    '',
    'Bericht:',
    message,
  ].join('\n');
  const html = `
        <h2>Nieuwe contactaanvraag</h2>
        <p><strong>Naam:</strong> ${safeName}</p>
        <p><strong>E-mail:</strong> ${safeEmail}</p>
        <p><strong>Telefoon:</strong> ${safePhone}</p>
        <p><strong>Bericht:</strong><br />${safeMessage}</p>
      `;

  try {
    await sendContactEmail({
      email,
      subject,
      text,
      html,
    });

    return res.status(200).json({
      message: 'Bericht succesvol verzonden.',
    });
  } catch (error) {
    console.error('Contact mail error:', error);
    const message = getTransportErrorMessage(error);
    return res.status(500).json({
      message,
    });
  }
});

app.listen(port, () => {
  console.log(`Contact backend draait op http://localhost:${port}`);
  console.log(`Mail provider: ${mailProvider}`);
  console.log(`Microsoft Graph geconfigureerd: ${hasGraphConfig ? 'ja' : 'nee'}`);
  console.log(`SMTP geconfigureerd: ${hasSmtpConfig ? 'ja' : 'nee'}`);
});
