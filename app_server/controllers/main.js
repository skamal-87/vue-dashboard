/*jslint node: true */
/*jshint esversion: 6 */
'use strict';

const request = require('request');
const config = require('../config');
const Domain = require("le-api").Domain;

let domain = new Domain();

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
    let accountNumber = req.body.accountNumber;
    domain.getLeDataReportingDomain(accountNumber, function(err, data) {
      if(err){
        res.status(401);
        res.json({
          "status": 401,
          "message": "Error",
          "error": err
        });
      }else{
        res.status(200);
        res.json({
          "status": 200,
          "message": "Success",
          "data": data
        });
      }
    });
  }
};

module.exports = main;
