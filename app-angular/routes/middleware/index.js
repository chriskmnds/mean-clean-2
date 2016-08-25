var morgan = require('morgan');
var utils = require('../../lib/utils');

// Loggers
var logExclude = [''];
var expressLogger = morgan(process.stdout.isTTY || process.env.NODE_LOG_DEV ? 'dev' : 'combined');

function reqLogger(req, res, next) {
  if (logExclude.indexOf(req.originalUrl) >= 0)
    next();
  else
    expressLogger(req, res, next);
}

// to log requests in dev only
function devReqLogger(req, res, next) {
  if (utils.isProductionInstance())
    next();
  else
    reqLogger(req, res, next);
}

exports.logger = reqLogger;
exports.devLogger = devReqLogger;