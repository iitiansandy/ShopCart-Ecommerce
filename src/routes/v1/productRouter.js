const express = require('express');
const { productController } = require('../../controllers/index');

const { productValidation } = require('../../middlewares/productValidator');

const productRuter = express.Router();

productRuter.post("/", productValidation, productController.createProduct);
productRuter.get("/", productController.getProducts);
productRuter.get("/:id", productController.getProduct);
productRuter.delete("/:id", productController.destroyProduct);



module.exports = productRuter;