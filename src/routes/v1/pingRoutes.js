const express = require('express');
const { pingController } = require('../../controllers/pingController');
const router = express.Router();


router.get("/ping", pingController);

module.exports = router;