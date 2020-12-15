'use strict';

var utils = require('../utils/writer.js');
var App = require('../service/AppService');

module.exports.getInventory = function getInventory (req, res, next) {
  App.getInventory()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
