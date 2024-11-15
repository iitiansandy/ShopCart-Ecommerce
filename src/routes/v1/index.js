const express = require('express');
const v1Router = express.Router();
const pingRouter = require('./pingRouter');
const productRouter = require('./productRouter');

v1Router.use("/ping", pingRouter);
v1Router.use("/product", productRouter);

module.exports = v1Router;