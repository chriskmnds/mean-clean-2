'use strict';

var express = require('express');
var mw = require('../../routes/middleware');
var ctrl = require('./auth.controller');
var router = express.Router();

router.post('/auth', mw.devLogger, ctrl.authenticateUser);

module.exports = router;
