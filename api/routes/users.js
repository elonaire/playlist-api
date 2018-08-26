const express = require('express');
const router = express.Router();

const Userscontroller = require('../controllers/users');

router.get('/login', Userscontroller.get_login);

router.post('/login', Userscontroller.user_login);

module.exports = router;
