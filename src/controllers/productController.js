
const { ProductRepo } = require('../repositories/index');
const {ProductService} = require('../services/index');
const productService = new ProductService(new ProductRepo());
const { errorResponse } = require('../utils/errorResponse');

async function createProduct(req, res) {
    try {
        const response = await productService.createProduct(req.body);
        return res.status(201).send({
            success: true,
            error: {},
            message: 'Product added successfully',
            data: response
        })
    } catch (error) {
        console.log("Error in createProduct controller:", error);
        return res.status(error.statusCode).send(errorResponse(error.reason, error));
    }
};


async function getProducts(req, res) {
    try {
        const response = await productService.getProducts();
        return res.status(200).send({
            success: true,
            message: 'Products fetched successfully',
            data: response
        });
    } catch (error) {
        console.log("Error in getProducts controller:", error);
        return res.status(error.statusCode).send(errorResponse(error.reason, error));
    }
};


async function getProduct(req, res) {
    try {
        const response = await productService.getProduct(req.params.id);
        return res.status(200).send({
            success: true,
            message: 'Products fetched successfully',
            data: response
        });
    } catch (error) {
        console.log("Error in getProduct controller:", error);
        return res.status(error.statusCode).send(errorResponse(error.reason, error));
    }
};


module.exports = {
    createProduct,
    getProducts,
    getProduct
}