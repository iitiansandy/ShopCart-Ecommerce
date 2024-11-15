const express = require('express');
const { pingControllerV2 } = require('../../controllers/pingController');
const pingRouterV2 = express.Router();


pingRouterV2.get("/", pingControllerV2);

module.exports = pingRouterV2;