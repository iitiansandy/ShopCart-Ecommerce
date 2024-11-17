const FakeStoreRepository = require('../repositories/fakeStoreRepo');
const ProductService = require('../services/productService');
const productService = new ProductService(new FakeStoreRepository());

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
        console.log(error);
        return res.status(500).send({
            status: false,
            message: error.message
        });
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
        console.log(error);
        return res.status(500).send({ message: error.message });
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
        console.log(error);
        return res.status(500).send({ message: error.message });
    }
};


module.exports = {
    createProduct,
    getProducts,
    getProduct
}