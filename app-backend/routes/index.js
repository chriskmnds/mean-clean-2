var mw = require('./middleware');

module.exports = function(app) {
  // index
  app.get('/', mw.logger, function(req,res) {
    res.send({msg: 'Hello Now'});
  });

  // api index
  app.get('/api', mw.logger, function(req,res) {
    res.send({msg: 'Node API'});
  });
  
  // api Auth routes
  app.use('/api', require('../api/auth'));
};