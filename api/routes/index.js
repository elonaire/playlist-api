const express = require('express');
const router = express.Router();

const indexControllers = require('../controllers/index');

router.get('/', indexControllers.get_index);

module.exports = router;
