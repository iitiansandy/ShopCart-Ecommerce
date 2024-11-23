const express = require('express');
// const responseTime = require('response-time');
const bodyParser = require('body-parser');
// const mysql = require('mysql2');
const { port, dbAlter, dbForce } = require('./config/serverConfig');

const db = require('./config/dbConfig');

// const Category = require('./models/category');

const { pingController } = require('./controllers/pingController');
const { configPingRoutes } = require('./routes/v1/pingRouter');
const pingRoutes = require('./routes/v1/pingRouter');

const apiRouter = require('./routes/apiRoutes');
// const Product = require('./models/product');

const app = express();
// app.use(responseTime(function f(req, res, time) {
//     console.log("Time elapsed:", time, "miliseconds");
// }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", apiRouter);

// const { Category, Product } = require('./models/associations');

app.listen(port, async() => {
    console.log("Server is running on port:", port);
    if (dbForce === true) {
        await db.sync({ force: true });
    } else if (dbAlter === true) {
        await db.sync({ alter: true });
    } else {
        await db.sync();
    }
    
    console.log("database connected");
});