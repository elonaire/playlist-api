const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRoutes = require('./api/routes/index');
const usersRoutes = require('./api/routes/users');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRoutes);
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
