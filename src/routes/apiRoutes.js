const express = require('express');

const pingRouter = require('./v1/pingRoutes');
const pingRouterV2 = require('./v2/pingRoutesV2');

const apiRouter = express.Router();

apiRouter.use("/v1", pingRouter);
apiRouter.use("/v2", pingRouterV2);


module.exports = apiRouter;