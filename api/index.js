const app = require('express')();
const { v4 } = require('uuid');

app.get('/api', (req, res) => {
  res.redirect("https://bank.hackclub.com/donations/start/green-mountain-robotics")
});

module.exports = app;
