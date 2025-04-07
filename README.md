
# Tasbeh Counter Bot Backend

## Setup

1. Clone the repository:
   ```
   git clone https://github.com/your-repo/tasbeh-counter-backend.git
   cd tasbeh-counter-backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file with your `BOT_TOKEN`:
   ```
   BOT_TOKEN=your_telegram_bot_token
   ```

4. Start the server:
   ```
   npm start
   ```

5. Set your Telegram webhook:
   ```
   https://api.telegram.org/bot<YOUR_BOT_TOKEN>/setWebhook?url=https://your-backend.railway.app/telegram/webhook
   ```

## Deployment

- Deploy to Railway or any cloud platform supporting Node.js.
- Update the Web App URL in `telegram.js` after deployment.
   