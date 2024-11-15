const express = require('express');
const v2Router = express.Router();
const pingRouterV2 = require('./pingRoutesV2');


v2Router.use("/ping", pingRouterV2);


module.exports = v2Router;