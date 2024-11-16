const express = require('express');
// const responseTime = require('response-time');
const bodyParser = require('body-parser');
const { port } = require('./config/serverConfig');
const { pingController } = require('./controllers/pingController');
const { configPingRoutes } = require('./routes/v1/pingRouter');
const pingRoutes = require('./routes/v1/pingRouter');

const apiRouter = require('./routes/apiRoutes');

const app = express();
// app.use(responseTime(function f(req, res, time) {
//     console.log("Time elapsed:", time, "miliseconds");
// }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", apiRouter);

app.listen(port, () => {
    console.log("Server is running on port:", port);
});