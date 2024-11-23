
const CategoryService = require('../services/categoryService');
const CategoryRepository = require('../repositories/categoryRepo');
const { errorResponse } = require('../utils/errorResponse');
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
        return res.status(error.statusCode).send(errorResponse(error.reason, error));
    }
};


async function getCategories(req, res) {
    try {
        const response = await categoryService.getCategories();
        return res.status(200).send({
            success: true,
            message: 'Category fetched successfully',
            data: response
        });
    } catch (error) {
        console.log(error);
        return res.status(error.statusCode).send(errorResponse(error.reason, error));
    }
};


async function getCategory(req, res) {
    try {
        const response = await categoryService.getCategory(req.params.id);
        return res.status(200).send({
            success: true,
            message: 'Categories fetched successfully',
            data: response
        });
    } catch (error) {
        return res.status(error.statusCode).send(errorResponse(error.reason, error));
    }
};

async function destroyCategory(req, res) {
    try {
        const response = await categoryService.destroyCategory(req.params.id);
        return res.status(200).send({
            success: true,
            message: 'Categories deleted successfully',
            data: response
        });
    } catch (error) {
        console.log(error);
        return res.status(error.statusCode).send(errorResponse(error.reason, error));
    }
};


module.exports = {
    createCategory,
    getCategories,
    getCategory,
    destroyCategory
}