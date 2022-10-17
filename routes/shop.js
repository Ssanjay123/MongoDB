const path = require('path');

const express = require('express');

const getController = require('../controllers/products');

const router = express.Router();

router.get('/',getController.addproduct);

module.exports = router;
