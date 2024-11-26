const express = require('express');
const { pingController } = require('../../controllers/index');
const pingRouterV2 = express.Router();


pingRouterV2.get("/", pingController.pingControllerV2);

module.exports = pingRouterV2;