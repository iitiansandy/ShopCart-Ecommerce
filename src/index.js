const express = require('express');
const { port } = require('./config/serverConfig');
const { pingController } = require('./controllers/pingController');
const { configPingRoutes } = require('./routes/pingRoutes');
const pingRoutes = require('./routes/pingRoutes');

const app = express();

app.use("/api/v1/ping", pingRoutes);

app.listen(port, () => {
    console.log("Server is running on port:", port);
});