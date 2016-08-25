'use strict';

//var jwt = require('jsonwebtoken');
//var User = require('../user/user.model').Model;

// for signing in
exports.authenticateUser = function(req, res, next) {
  res.status(403).send({error:'Route not implemented'});
};
