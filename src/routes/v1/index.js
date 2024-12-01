const express = require('express');
const v1Router = express.Router();
const pingRouter = require('./pingRouter');
const productRouter = require('./productRouter');
const categoryRuter = require('./categoryRouter');
const userRouter = require('./userRouter');
const cartRouter = require('./cartRouter');
const orderRouter = require('./orderRouter');


v1Router.use("/ping", pingRouter);
v1Router.use("/product", productRouter);
v1Router.use("/category", categoryRuter);
v1Router.use("/user", userRouter);
v1Router.use("/cart", cartRouter);
v1Router.use("/order", orderRouter);


module.exports = v1Router;