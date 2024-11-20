const express = require('express');
// const responseTime = require('response-time');
const bodyParser = require('body-parser');
// const mysql = require('mysql2');
const { port } = require('./config/serverConfig');

const db = require('./config/dbConfig');

const Category = require('./models/category');

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

app.listen(port, async() => {
    console.log("Server is running on port:", port);
    await db.sync({ alter: true });
    console.log("database connected");
    // const res = await Category.create({
    //     name: 'Electronics',
    //     description: 'Electronics Category'
    // });
    // console.log(res);

});