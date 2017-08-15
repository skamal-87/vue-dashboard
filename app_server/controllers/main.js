/*jslint node: true */
/*jshint esversion: 6 */
'use strict';

const request = require('request');
const config = require('../config');
const utils = require('../utils');

const main = {
  test: function (req, res) {
    utils.sendSuccessResponse('this is a test', res);
  },

  getQueueHealth: function(req, res) {
    let oauth = {
      consumer_key: config.consumer_key,
      consumer_secret: config.consumer_secret,
      token: config.token,
      token_secret: config.token_secret
    };
    let url = 'https://' + config.realtime_base_domain + '/operations/api/account/' + config.account_id + '/queuestatesla?timeframe=1440&v=1&skillIds=all';
    request.get({
      url: url,
      oauth: oauth,
      json: true,
      headers: {
        'Content-Type': 'application/json'
      }
    }, (e, r, b) => {
      utils.sendSuccessResponse(b, res);
    });
  }
};

module.exports = main;
