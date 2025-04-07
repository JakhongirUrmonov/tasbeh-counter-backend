// index.js
const express = require('express');
const bodyParser = require('body-parser');
const telegramRoutes = require('./telegram'); // Import telegram.js

console.log('Application starting...'); // Add this

const app = express();

app.use((req, res, next) => { // Add simple request logger
  console.log(`Incoming Request: ${req.method} ${req.originalUrl}`);
  next();
});

app.use(bodyParser.json());
app.use('/telegram', telegramRoutes);

// Optional: Add a root handler for basic health check
app.get('/', (req, res) => {
    res.send('Backend is running!');
});


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));