const express = require('express');
const { categoryController } = require('../../controllers/index');
const { catValidation } = require('../../middlewares/categoryMiddleware');

const categoryRuter = express.Router();

categoryRuter.post("/", catValidation, categoryController.createCategory);
categoryRuter.get("/", categoryController.getCategories);
categoryRuter.get("/:id", categoryController.getCategory);
categoryRuter.delete("/:id", categoryController.destroyCategory);
categoryRuter.get("/:id/products", categoryController.getProductForCategory);



module.exports = categoryRuter;