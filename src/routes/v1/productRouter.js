const express = require('express');
const { productController } = require('../../controllers/index');

const productRuter = express.Router();


productRuter.get("/", productController.getProducts);
productRuter.get("/:id", productController.getProduct);



module.exports = productRuter;