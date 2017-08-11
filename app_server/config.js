/*jslint node: true */
/*jshint esversion: 6 */
'use strict';

require('dotenv').config();

module.exports = {
  "port": 8081,
  "consumer_key": process.env.APP_KEY,
  "consumer_secret": process.env.APP_SECRET,
  "token": process.env.ACCESS_TOKEN,
  "token_secret": process.env.ACCESS_TOKEN_SECRET
};
