/*jslint node: true */
/*jshint esversion: 6 */
'use strict';

const express = require('express');
const router = express.Router();
 
const main = require('../controllers/main.js');
 
router.get('/api/v1/test', main.test);
router.get('/api/v1/getQueueHealth', main.getQueueHealth);
router.post('/api/v1/getDomain', main.getDomain);
 
module.exports = router;
