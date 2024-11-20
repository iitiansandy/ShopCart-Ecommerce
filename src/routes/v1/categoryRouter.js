const express = require('express');
const { createCategory, getCategories, getCategory } = require('../../controllers/categoryController');

const categoryRuter = express.Router();

categoryRuter.post("/", createCategory);
categoryRuter.get("/", getCategories);
categoryRuter.get("/:id", getCategory);



module.exports = categoryRuter;