const express = require('express');
const { userController } = require('../../controllers/index');

const userRouter = express.Router();

userRouter.post("/signup", userController.createUser);
// categoryRuter.get("/", categoryController.getCategories);
// categoryRuter.get("/:id", categoryController.getCategory);
// categoryRuter.delete("/:id", categoryController.destroyCategory);
// categoryRuter.get("/:id/products", categoryController.getProductForCategory);



module.exports = userRouter;