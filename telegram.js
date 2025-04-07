// telegram.js
require('dotenv').config();
const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();

const TELEGRAM_API = `https://api.telegram.org/bot${process.env.BOT_TOKEN}`;

// This should handle POST requests at the /telegram/webhook endpoint
router.post('/webhook', async (req, res) => {
  const message = req.body.message;
  if (message?.text === '/start') {
    const chat_id = message.chat.id;

    try {
      await fetch(`${TELEGRAM_API}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id,
          text: 'Assalomu alaykum! Click below to open the Tasbeh Counter:',
          reply_markup: {
            inline_keyboard: [
              [
                {
                  text: '📿 Open Tasbeh Counter',
                  web_app: { url: 'https://tasbeh-counter.vercel.app' }, // Replace with your frontend URL
                },
              ],
            ],
          },
        }),
      });
      res.sendStatus(200);  // Successful response
    } catch (error) {
      console.error('Error sending message:', error);
      res.sendStatus(500);  // Server error if the message fails to send
    }
  } else {
    res.sendStatus(200); // Default response for other messages
  }
});

module.exports = router;
