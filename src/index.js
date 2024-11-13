const express = require('express');
const { port } = require('./config/serverConfig');
const { pingController } = require('./controllers/pingController');
const { configPingRoutes } = require('./routes/v1/pingRoutes');
const pingRoutes = require('./routes/v1/pingRoutes');

const apiRouter = require('./routes/apiRoutes');

const app = express();

app.use("/api", apiRouter);

app.listen(port, () => {
    console.log("Server is running on port:", port);
});