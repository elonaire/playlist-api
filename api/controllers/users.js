const querystring = require('querystring');

const my_client_id = 'b2b154c0e8ef454aa068bf4e1d498e7f';
const redirect_uri = 'https://app.songplay.fr/spotify/callback/';
const scope = 'user-read-private user-read-email';
const client_secret = '4299d20d4bb648cf9ab84b6af241fbe0';

let generateRandomString = function(length) {
  var text = '';
  let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

let stateKey = 'spotify_auth_state';

exports.user_login = (req,res,next)=>{

  let state = generateRandomString(16);
  res.cookie(stateKey, state);

  // your application requests authorization
  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: my_client_id,
      scope: scope,
      redirect_uri: redirect_uri,
      state: state
    })
  );
}
