const express = require('express');
const { pingController } = require('../../controllers/pingController');
const router = express.Router();


router.get("/", pingController);

module.exports = router;