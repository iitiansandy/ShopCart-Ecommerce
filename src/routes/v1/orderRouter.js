const express = require('express');
const { orderController } = require('../../controllers/index');
const { isLoggedIn } = require('../../middlewares/authMiddleware');

const orderRuter = express.Router();

orderRuter.post("/", isLoggedIn, orderController.createOrder);
orderRuter.get("/:id", isLoggedIn, orderController.getOrder);
// orderRuter.delete("/:id/products", isLoggedIn, cartController.clearCart);



module.exports = orderRuter;