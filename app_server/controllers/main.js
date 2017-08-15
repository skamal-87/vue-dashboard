/*jslint node: true */
/*jshint esversion: 6 */
'use strict';

const request = require('request');
const config = require('../config');
const Domain = require('le-api').Domain; 
const Credentials = require('le-api').Credentials;

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
  },

  getDomain: (req, res) => {
    let domain = new Domain();
    let accountNumber = req.body.accountNumber;
    domain.getLeDataReportingDomain(accountNumber, function(err, data) {
      if (err) {
        sendErrorResponse(err, res);
      }else{
        sendSuccessResponse(data, res);
      }
    });
  },

  getBearerToken: (req, res) => {
    let creds = new Credentials();
    let accountNumber = req.body.accountNumber;
    let userName = req.body.userName;
    let password = req.body.password;
    creds.init(accountNumber, null, { username: userName, password: password }, (err, data) => {
      if (err) {
        sendErrorResponse(err, res);
      }else{
        creds.login(function(err, data) {
          if(err){
            sendErrorResponse(err, res);
          }else{
            sendSuccessResponse(creds.bearerToken, res);
          }
        });
      }
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
