
const {OrderService} = require('../services/index');
const { errorResponse } = require('../utils/errorResponse');
const { OrderRepo, CartRepo } = require('../repositories/index');
const { StatusCodes } = require('http-status-codes');
const orderService = new OrderService(new OrderRepo(), new CartRepo());

async function createOrder(req, res) {
    try {
        const response = await orderService.createOrder(req.user.id);
        return res.status(StatusCodes.CREATED).send({
            success: true,
            error: {},
            message: 'Order created successfully',
            data: response
        })
    } catch (error) {
        console.log("Error in createOrder controller:", error);
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
    createOrder,
   
}