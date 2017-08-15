/*jslint node: true */
/*jshint esversion: 6 */
'use strict';

const request = require('request');
const config = require('../config');

const main = {
  test: function (req, res) {
    res.json({'hi':1});
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
      res.json(b);
    });
  }
};

let sendErrorResponse = (error, response) => {
  response.status(401);
  response.json({
    "status": 401,
    "message": "Error",
    "error": error
  });
};

let sendSuccessResponse = (data, response) => {
  response.status(200);
  response.json({
    "status": 200,
    "message": "Success",
    "data": data
  });
}

module.exports = main;
