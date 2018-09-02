const express = require('express');
const router = express.Router();
const spotifyController = require('../controllers/spotify');

router.get('/callback', spotifyController.spotify_auth);


module.exports = router;
