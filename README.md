  # Website Layout Design

  This is a code bundle for Website Layout Design. The original project is available at https://www.figma.com/design/tMR8tQM7nmXeFyTIAOZ7RL/Website-Layout-Design.

  ## Running the code

  Run `npm i` to install the dependencies.

  Copy `.env.example` to `.env` and fill in SMTP credentials.

  Run `npm run dev:full` to start frontend + backend together.

  The contact API will be available at `http://localhost:3001/api/contact`.

  Note: port `3000` must be free for the frontend dev server.

  If you use a Microsoft 365 mailbox and sending fails with SMTP auth disabled, enable SMTP AUTH for that mailbox or use another SMTP provider with app-password support.
  
