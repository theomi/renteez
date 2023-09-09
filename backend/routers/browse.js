const express = require('express');
const router = express.Router();

// Import user controller
const BrowseController = require('../controllers/browseController');

// Define routes
router.get('/', BrowseController.getFiltered);

module.exports = router;