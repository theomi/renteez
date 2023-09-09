const express = require('express');
const router = express.Router();

// Import user controller
const ContactController = require('../controllers/contactController');

// Define routes
router.get('/', ContactController.getContact);

module.exports = router;