const express = require('express');
const router = express.Router();

// Import user controller
const HomeController = require('../controllers/homeController');

// Define routes
router.get('/', HomeController.getHome);

module.exports = router;