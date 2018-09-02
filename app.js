const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const request = require('request');
const querystring = require('querystring');

//for oAuth
const my_client_id = '1a253d643ca64c1a893ab7af79c596e1';
const client_secret = '009e2267745242c38f410094e5899a63';

const usersRoutes = require('./api/routes/users');
const spotifyRoutes = require('./api/routes/spotify');

const app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'dist/ng6')))
.use(cors())
.use(cookieParser());
app.use('/', express.static(path.join(__dirname, 'dist/ng6')));

app.use('/users', usersRoutes);
app.use('/spotify', spotifyRoutes);


app.get('/refresh_token', (req,res,next)=>{
  // requesting access token from refresh token
  var refresh_token = req.query.refresh_token;
  var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: { 'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64')) },
    form: {
      grant_type: 'refresh_token',
      refresh_token: refresh_token
    },
    json: true
  };

  request.post(authOptions, (error, response, body)=>{
    if (!error && response.statusCode === 200) {
      var access_token = body.access_token;
      res.send({
        'access_token': access_token
      });
    }
  });
});


// catch 404
app.use(function(req, res, next) {
  res.status(404).json({
    message: "Resource not found"
  });
});

// catch 500
app.use(function(err, req, res, next) {
  res.status(500).json({
    message: `Internal server error: ${err}`
  });
});

module.exports = app;
