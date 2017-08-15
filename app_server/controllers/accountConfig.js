/*jslint node: true */
/*jshint esversion: 6 */
'use strict';

const request = require('request');
const utils = require('../utils');
const Domain = require('le-api').Domain; 
const Credentials = require('le-api').Credentials;

const accountConfig = {
  getDomain: (req, res) => {
    let domain = new Domain();
    let accountNumber = req.body.accountNumber;
    domain.getLeDataReportingDomain(accountNumber, function(err, data) {
      if (err) {
        utils.sendErrorResponse(err, res);
      }else{
        utils.sendSuccessResponse(data, res);
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
        utils.sendErrorResponse(err, res);
      }else{
        creds.login(function(err, data) {
          if(err){
            utils.sendErrorResponse(err, res);
          }else{
            utils.sendSuccessResponse(creds.bearerToken, res);
          }
        });
      }
    });
  }
};

module.exports = accountConfig;
