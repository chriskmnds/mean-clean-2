'use strict';

var mw = require('./middleware');

module.exports = function(app) {
  // index
  app.get('/', mw.logger, function(req,res) {
    res.render('index', {name: 'index'});
  });
  // about
  app.get('/about', mw.devLogger, function(req,res) {
    res.render('about', {name: 'about'});
  });
};