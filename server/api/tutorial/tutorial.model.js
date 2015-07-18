//'use strict';
var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  repoUrl: {
    type: String
  }
});

var Tutorial = mongoose.model('Tutorial', schema);

module.exports = Tutorial;

