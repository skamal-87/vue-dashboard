/*jslint node: true */
/*jshint esversion: 6 */
'use strict';

const express = require('express');
const router = express.Router();
 
const main = require('../controllers/main.js');
const accountConfig = require('../controllers/accountConfig.js');
 
router.get('/api/v1/test', main.test);
router.post('/api/v1/getQueueHealth', main.getQueueHealth);
router.post('/api/v1/getDomain', accountConfig.getDomain);
router.post('/api/v1/getBearerToken', accountConfig.getBearerToken);
 
module.exports = router;
