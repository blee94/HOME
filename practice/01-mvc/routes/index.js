const express = require('express');
const controller = require('../controller/Cmain');
const router = express.Router();

router.get('/', controller.main);

router.post('/', controller.submit);

router.get('/success', controller.success);

module.exports = router;
