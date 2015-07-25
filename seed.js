var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));
var path = require('path');
var mongoose = require('mongoose');
var startDb = require('./server/db');
var Tutorial = require('./server/api/tutorial/tutorial.model.js');
var chalk = require('chalk');

// Make to posts to write to the db
var post1 = {};
var post2 = {};

post1.title = "Learning Express";
post1.body = "Let's learn Express together by making an example server!";
post2.title = "<h1>Learning Angular</h1>";
post2.body = "<i>Let's learn Angular together by making an example single page app!</i>";

startDb
  // Write to the db and exit
  .then(function() {
    Tutorial.create(post1)
      .then(function(){
        Tutorial.create(post2)
          .then(function() {
            console.log(chalk.green('Database seeded. Goodbye!'));
            process.exit(0);
          });
      });
  });