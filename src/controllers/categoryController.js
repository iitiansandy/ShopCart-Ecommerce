
const {CategoryService} = require('../services/index');
const { errorResponse } = require('../utils/errorResponse');
const { ProductRepo, CategoryRepo, FakeStoreRepo } = require('../repositories/index');
const categoryService = new CategoryService(new CategoryRepo(), new ProductRepo());

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
        console.log("Error in createCategory controller:", error);
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
        console.log("Error in getCategories controller:", error);
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
        console.log("Error in getCategory controller:", error);
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
        console.log("Error in destroyCategory controller:", error);
        return res.status(error.statusCode).send(errorResponse(error.reason, error));
    }
};

async function getProductForCategory(req, res) {
    try {
        console.log("id:", req.params.id);
        const response = await categoryService.getProductsForCategory(req.params.id);
        return res.status(200).send({
            success: true,
            message: 'products fetched successfully',
            data: response
        });
    } catch (error) {
        console.log("Error in getProductForCategory controller:", error);
        return res.status(error.statusCode).send(errorResponse(error.reason, error));
    }
};


module.exports = {
    createCategory,
    getCategories,
    getCategory,
    destroyCategory,
    getProductForCategory
}