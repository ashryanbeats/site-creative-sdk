var mongoose = require('mongoose');
var Tutorial = require('./tutorial.model');

module.exports = {
  index: function (req, res) {
    Tutorial
      .find()
      .exec()
      .then(function(tutorials) {
        res.send(tutorials);
      });
   },
   create: function(req, res, next) {
      Tutorial
        .create(req.body, function(err, tutorial){
          if(err) return next(err);
          res.send(tutorial);
        });
    } 
};

