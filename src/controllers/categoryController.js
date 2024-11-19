
const CategoryService = require('../services/categoryService');
const CategoryRepository = require('../repositories/categoryRepo');
const categoryService = new CategoryService(new CategoryRepository());

async function createCategory(req, res) {
    try {
        const response = await categoryService.createCategory(req.body);
        return res.status(201).send({
            success: true,
            error: {},
            message: 'Category added successfully',
            data: response
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            status: false,
            message: error.message
        });
    }
};


async function getCategories(req, res) {
    try {
        const response = await productService.getProducts();
        return res.status(200).send({
            success: true,
            message: 'Category fetched successfully',
            data: response
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({ message: error.message });
    }
};


async function getCategory(req, res) {
    try {
        const response = await productService.getProduct(req.params.id);
        return res.status(200).send({
            success: true,
            message: 'Categories fetched successfully',
            data: response
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({ message: error.message });
    }
};


module.exports = {
    createCategory
}