const express = require('express');
const { userController } = require('../../controllers/index');

const userRouter = express.Router();

userRouter.post("/signup", userController.createUser);
userRouter.post("/signin", userController.signInUser);




module.exports = userRouter;