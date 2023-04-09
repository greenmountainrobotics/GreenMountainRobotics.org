const app = require('express')();

app.get('/api', (req, res) => {
  res.redirect("https://bank.hackclub.com/donations/start/green-mountain-robotics")
});

module.exports = app;
