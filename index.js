// index.js
const express = require('express');
const bodyParser = require('body-parser');
const telegramRoutes = require('./telegram');

const app = express();
app.use(bodyParser.json()); // This is necessary for parsing JSON request bodies
app.use('/telegram', telegramRoutes); // Set up the /telegram route for the Telegram webhook

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
