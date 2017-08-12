/*jslint node: true */
/*jshint esversion: 6 */
'use strict';

require('dotenv').config();

module.exports = {
  "port": process.env.PORT,
  "consumer_key": process.env.APP_KEY2,
  "consumer_secret": process.env.APP_SECRET2,
  "token": process.env.ACCESS_TOKEN2,
  "token_secret": process.env.ACCESS_TOKEN_SECRET2,
  "realtime_base_domain": process.env.REALTIME_BASE_DOMAIN2,
  "account_id": process.env.ACCOUNT_ID2
};
