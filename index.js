const express = require('express');
const app = express();

// Define your Cloud Function route
app.get('/', (req, res) => {
  res.send('Hello, Cloud Functions!');
});

// Export the Express app as the Cloud Function
exports.app = app;
