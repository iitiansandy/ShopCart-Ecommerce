const express = require('express');
const { cartController } = require('../../controllers/index');
const { isLoggedIn } = require('../../middlewares/authMiddleware');

const cartRuter = express.Router();

cartRuter.patch("/:id", isLoggedIn, cartController.updateCart);




module.exports = cartRuter;