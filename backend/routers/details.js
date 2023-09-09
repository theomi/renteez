const express = require('express');
const router = express.Router();

// Import user controller
const DetailsController = require('../controllers/detailsController');

// Define routes
router.get('/:id', DetailsController.getDetailsById);

module.exports = router;