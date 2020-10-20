// NPM
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const proxy = require('express-http-proxy');
const fs = require('fs');

const app = express(); // define our app using express
const port = process.env.PORT || 3000;
const apiUrl = process.env.API_URL || 'localhost:8081';

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '/public')));
app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());
app.all(
  '/api/*',
  proxy(apiUrl, {
    proxyReqPathResolver(req) {
      return req.url.replace('api/', '');
    },
  }),
);

app.get('*', (req, res) => {
  console.log(__dirname);
  fs.readdirSync(__dirname).forEach((file) => {
    console.log(file);
  });
  res.sendFile(path.join(__dirname, '/public', '/index.html'));
});

app.listen(port);
console.log(`Magic happens on port ${port}`);
