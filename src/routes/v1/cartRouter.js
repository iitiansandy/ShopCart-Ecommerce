const express = require('express');
const { cartController } = require('../../controllers/index');
const { isLoggedIn } = require('../../middlewares/authMiddleware');

const cartRuter = express.Router();

cartRuter.patch("/:id", isLoggedIn, cartController.updateCart);
cartRuter.patch("/:id/products", isLoggedIn, cartController.getCartProducts);
cartRuter.delete("/:id/products", isLoggedIn, cartController.clearCart);



module.exports = cartRuter;