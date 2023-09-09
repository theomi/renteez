const express = require('express');
const router = express.Router();

// Import user controller
const AboutController = require('../controllers/aboutController');

// Define routes
router.get('/', AboutController.getAbout);

module.exports = router;