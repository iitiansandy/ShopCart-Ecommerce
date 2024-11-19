const express = require('express');
const v1Router = express.Router();
const pingRouter = require('./pingRouter');
const productRouter = require('./productRouter');
const categoryRuter = require('./categoryRouter');

v1Router.use("/ping", pingRouter);
v1Router.use("/product", productRouter);
v1Router.use("/category", categoryRuter);
module.exports = v1Router;