  # Website Layout Design

  This is a code bundle for Website Layout Design. The original project is available at https://www.figma.com/design/tMR8tQM7nmXeFyTIAOZ7RL/Website-Layout-Design.

  ## Running the code

  Run `npm i` to install the dependencies.

  Copy `.env.example` to `.env`.

  For Microsoft 365, prefer Microsoft Graph and fill in:
  `GRAPH_TENANT_ID`, `GRAPH_CLIENT_ID`, `GRAPH_CLIENT_SECRET`, and `GRAPH_SENDER`.

  The app will automatically use Microsoft Graph when those variables are set.
  Otherwise it falls back to SMTP.

  Run `npm run dev:full` to start frontend + backend together.

  The contact API will be available at `http://localhost:3001/api/contact`.

  Note: port `3000` must be free for the frontend dev server.

  For Microsoft 365, create an Entra app registration with Microsoft Graph
  `Mail.Send` application permission and grant admin consent. Basic SMTP
  username/password auth is no longer sufficient for Microsoft 365.
  
