const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const usersRoutes = require('./api/routes/users');

const app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'dist/ng6')));
app.use('/', express.static(path.join(__dirname, 'dist/ng6/index.html')));

app.use('/users', usersRoutes);

// catch 404
app.use(function(req, res, next) {
  res.status(404).json({
    message: "Resource not found"
  });
});

// catch 500
app.use(function(err, req, res, next) {
  res.status(500).json({
    message: "Internal server error"
  });
});

module.exports = app;
