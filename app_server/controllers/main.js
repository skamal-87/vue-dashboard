/*jslint node: true */
/*jshint esversion: 6 */
'use strict';

const main = {
  test: function(req, res) {
    res.json({'hi':1});
  }
};

module.exports = main;
