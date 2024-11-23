const express = require('express');
const { createCategory, getCategories, getCategory, destroyCategory } = require('../../controllers/categoryController');
const { catValidation } = require('../../middlewares/categoryMiddleware');

const categoryRuter = express.Router();

categoryRuter.post("/", catValidation, createCategory);
categoryRuter.get("/", getCategories);
categoryRuter.get("/:id", getCategory);
categoryRuter.delete("/:id", destroyCategory);



module.exports = categoryRuter;