const app = require('express')();

app.get('/donate', (req, res) => {
  res.redirect("https://bank.hackclub.com/donations/start/green-mountain-robotics")
});

module.exports = app;
