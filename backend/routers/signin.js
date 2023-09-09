const express = require('express');
const router = express.Router();

// Import user controller
const SigninController = require('../controllers/singinController');

// Define routes
router.post('/', SigninController.signinForm);

module.exports = router;