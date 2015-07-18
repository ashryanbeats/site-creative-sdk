var dbURI = 'mongodb://localhost:27017/creative-sdk-site-app-tests';
var clearDB = require('mocha-mongoose')(dbURI);

var expect = require('chai').expect;
var Promise = require('bluebird');
var mongoose = require('mongoose');

var Tutorial = require('./tutorial.model.js');

describe('Tutorial model', function () {
  before('Connect to db', function (done) {
    if (mongoose.connection.db) return done();
    mongoose.connect(dbURI, done);
  });

  after('Clear test database', function (done) {
    clearDB(done);
  });

  it('should exist', function () {
      expect(Tutorial).to.be.a('function');
  });

  describe('Tutorial creation', function() {

    it('should create a tutorial in the db', function(done){

      Tutorial.create({ title: "Express tutorial", body: "Let's learn to use Express!" })
        .then(function(data) {
          Tutorial.findById(data).exec()
            .then(function(data) {
              expect(data).to.be.a('object');
              done();
            })
            .then(null, done);
        });
    });  
      
  });
});
