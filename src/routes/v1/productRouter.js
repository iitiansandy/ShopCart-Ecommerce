const express = require('express');
const { productController } = require('../../controllers/index');

const productRuter = express.Router();

productRuter.post("/", productController.createProduct);
productRuter.get("/", productController.getProducts);
productRuter.get("/:id", productController.getProduct);



module.exports = productRuter;