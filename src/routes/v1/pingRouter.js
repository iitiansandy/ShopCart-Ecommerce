const express = require('express');
const {pingController} = require('../../controllers/index');
const router = express.Router();


router.get("/", pingController.pingController);

module.exports = router;