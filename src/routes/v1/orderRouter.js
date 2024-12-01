const express = require('express');
const { orderController } = require('../../controllers/index');
const { isLoggedIn } = require('../../middlewares/authMiddleware');

const orderRuter = express.Router();

orderRuter.post("/", isLoggedIn, orderController.createOrder);
// orderRuter.patch("/:id/products", isLoggedIn, cartController.getCartProducts);
// orderRuter.delete("/:id/products", isLoggedIn, cartController.clearCart);



module.exports = orderRuter;