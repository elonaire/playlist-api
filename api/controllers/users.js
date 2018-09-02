const querystring = require('querystring');

const my_client_id = '1a253d643ca64c1a893ab7af79c596e1';
const redirect_uri = 'https://app.songplay.fr/spotify/callback/';
const scope = 'user-read-private user-read-email';
const client_secret = '009e2267745242c38f410094e5899a63';

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
