const express = require('express');
const { pingControllerV2 } = require('../../controllers/pingController');
const router = express.Router();


router.get("/ping", pingControllerV2);

module.exports = router;