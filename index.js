// index.js
const express = require('express');
const bodyParser = require('body-parser');
const telegramRoutes = require('./telegram'); // Import telegram.js

const app = express();
app.use(bodyParser.json()); // Middleware for parsing JSON request bodies
app.use('/telegram', telegramRoutes); // Register the route for the /telegram path

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
