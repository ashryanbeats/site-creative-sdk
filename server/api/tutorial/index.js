var router = require('express').Router();

var controller = require('./tutorial.controller.js');

module.exports = router;

router.get('/', controller.index);

router.post('/', controller.create);
