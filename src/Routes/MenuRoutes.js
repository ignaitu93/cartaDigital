const express = require('express');
const router = express.Router();
const menuController = require('../controllers/menuControllers');


router.get('/', menuController.getMenuPage);

module.exports = router;