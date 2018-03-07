'use strict';
module.exports = function(app) {
  var todoList = require('../controller/twitterController');
  var rp=require('request-promise');
  app.route('/tweets/:query')
  .get(todoList.find_tweets);

};
