const express = require('express');
const { createCategory } = require('../../controllers/categoryController');

const categoryRuter = express.Router();

categoryRuter.post("/", createCategory);
// categoryRuter.get("/", productController.getProducts);
// categoryRuter.get("/:id", productController.getProduct);



module.exports = categoryRuter;