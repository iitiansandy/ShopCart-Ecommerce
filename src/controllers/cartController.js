
const {CartService} = require('../services/index');
const { errorResponse } = require('../utils/errorResponse');
const { CartRepo } = require('../repositories/index');
const { StatusCodes } = require('http-status-codes');
const cartService = new CartService(new CartRepo());

async function updateCart(req, res) {
    try {
        const inc = (req.body.inc == true || req.body.inc == "true") ? true: false;
        const response = await cartService.updateCart(req.user.id, req.params.id, req.body.productId, inc);
        return res.status(StatusCodes.OK).send({
            success: true,
            error: {},
            message: 'Cart updated successfully',
            data: response
        })
    } catch (error) {
        console.log("Error in updateCart controller:", error);
        return res.status(error.statusCode).send(errorResponse(error.reason, error));
    }
};

async function getCartProducts(req, res) {
    try {
        const response = await cartService.getCartProducts(req.params.id, req.user.id);
        return res.status(StatusCodes.OK).send({
            success: true,
            error: {},
            message: 'Cart products fetched successfully',
            data: response
        })
    } catch (error) {
        console.log("Error in updateCart controller:", error);
        return res.status(error.statusCode).send(errorResponse(error.reason, error));
    }
};


async function clearCart(req, res) {
    try {
        const response = await cartService.clearCart(req.params.id, req.user.id);
        return res.status(StatusCodes.OK).send({
            success: true,
            error: {},
            message: 'Cart updated successfully',
            data: response
        })
    } catch (error) {
        console.log("Error in updateCart controller:", error);
        return res.status(error.statusCode).send(errorResponse(error.reason, error));
    }
};


module.exports = {
    updateCart,
    getCartProducts,
    clearCart
}