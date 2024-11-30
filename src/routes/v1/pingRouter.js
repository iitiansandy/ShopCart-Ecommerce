const express = require('express');
const {pingController} = require('../../controllers/index');
const { isLoggedIn } = require('../../middlewares/authMiddleware');
const router = express.Router();


router.get("/", isLoggedIn, pingController.pingController);

module.exports = router;