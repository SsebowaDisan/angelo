const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');

dotenv.config();

const app = express();
const port = Number(process.env.PORT) || 3001;

const frontendOrigin = process.env.FRONTEND_ORIGIN || 'http://localhost:3000';
const contactRecipient = process.env.CONTACT_TO || 'Angelo_renovates@hotmail.com';
const smtpHost = process.env.SMTP_HOST || 'smtp-mail.outlook.com';
const smtpPort = Number(process.env.SMTP_PORT || 587);
const smtpUser = process.env.SMTP_USER || '';
const smtpPass = process.env.SMTP_PASS || '';
const smtpFrom = process.env.SMTP_FROM || smtpUser;
const smtpSecure = process.env.SMTP_SECURE === 'true';

const hasSmtpConfig = Boolean(smtpUser && smtpPass);

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

  if (error?.code === 'EAUTH' && response.includes('SmtpClientAuthentication is disabled')) {
    return 'SMTP-login is geblokkeerd. Activeer SMTP AUTH voor deze mailbox of gebruik een ander SMTP-account met app-wachtwoord.';
  }

  if (error?.code === 'EAUTH') {
    return 'SMTP-login mislukt. Controleer SMTP_USER/SMTP_PASS en gebruik indien nodig een app-wachtwoord.';
  }

  if (error?.code === 'ESOCKET') {
    return 'Kan geen verbinding maken met de mailserver. Controleer SMTP_HOST, SMTP_PORT en SMTP_SECURE.';
  }

  return 'Verzenden mislukt. Probeer later opnieuw.';
}

app.get('/api/health', (_req, res) => {
  res.json({
    ok: true,
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

  if (!hasSmtpConfig || !transporter) {
    return res.status(500).json({
      message: 'Mailserver is nog niet geconfigureerd.',
    });
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone || 'Niet opgegeven');
  const safeMessage = escapeHtml(message).replaceAll('\n', '<br />');

  try {
    await transporter.sendMail({
      from: smtpFrom,
      to: contactRecipient,
      replyTo: email,
      subject: `Nieuwe contactaanvraag van ${name}`,
      text: [
        `Naam: ${name}`,
        `E-mail: ${email}`,
        `Telefoon: ${phone || 'Niet opgegeven'}`,
        '',
        'Bericht:',
        message,
      ].join('\n'),
      html: `
        <h2>Nieuwe contactaanvraag</h2>
        <p><strong>Naam:</strong> ${safeName}</p>
        <p><strong>E-mail:</strong> ${safeEmail}</p>
        <p><strong>Telefoon:</strong> ${safePhone}</p>
        <p><strong>Bericht:</strong><br />${safeMessage}</p>
      `,
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
  console.log(`SMTP geconfigureerd: ${hasSmtpConfig ? 'ja' : 'nee'}`);
});
