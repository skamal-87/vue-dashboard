/*jslint node: true */
/*jshint esversion: 6 */
'use strict';

require('dotenv').config();

module.exports = {
  "port": process.env.PORT,
  "consumer_key": process.env.APP_KEY,
  "consumer_secret": process.env.APP_SECRET,
  "token": process.env.ACCESS_TOKEN,
  "token_secret": process.env.ACCESS_TOKEN_SECRET,
  "realtime_base_domain": process.env.REALTIME_BASE_DOMAIN,
  "account_id": process.env.ACCOUNT_ID
};
