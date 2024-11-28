
const {UserService} = require('../services/index');
const { errorResponse } = require('../utils/errorResponse');
const { UserRepo } = require('../repositories/index');
const userService = new UserService(new UserRepo());

async function createUser(req, res) {
    try {
        const response = await userService.createUser(req.body);
        return res.status(201).send({
            success: true,
            error: {},
            message: 'User added successfully',
            data: response
        })
    } catch (error) {
        console.log("Error in createUser controller:", error);
        return res.status(error.statusCode).send(errorResponse(error.reason, error));
    }
};


async function getCategories(req, res) {
    try {
        const response = await userService.getCategories();
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
        const response = await userService.getCategory(req.params.id);
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
        const response = await userService.destroyCategory(req.params.id);
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
        const response = await userService.getProductsForCategory(req.params.id);
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
    createUser,
    getCategories,
    getCategory,
    destroyCategory,
    getProductForCategory
}