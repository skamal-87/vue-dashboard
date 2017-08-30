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
    console.log(req.body);
    let oauth = {
      consumer_key: config.consumer_key,
      consumer_secret: config.consumer_secret,
      token: config.token,
      token_secret: config.token_secret
    };
    let url = 'https://' + config.realtime_base_domain + '/operations/api/account/' + req.body.accountNumber + '/queuehealth?timeframe=1440&v=1&skillIds=all&agentIds=all';
    request.get({
      url: url,
      oauth: oauth,
      json: true,
      headers: {
        'Content-Type': 'application/json'
      }
    }, (error, response, body) => {
      if (error) {
        utils.sendErrorResponse(error, res);
      } else if (response.statusCode != 200) {
        utils.sendErrorResponse(body, res);
      } else {
        utils.sendSuccessResponse(body, res);
      }
    });
  }
};

module.exports = main;
