const express = require('express');
const { pingController } = require('../../controllers/pingController');

const productRuter = express.Router();


productRuter.get("/", (req, res) => {
    res.send({ products: []})
});

module.exports = productRuter;