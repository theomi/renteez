const express = require('express');
const router = express.Router();

// Import user controller
const SigninController = require('../controllers/signinController');

// Define routes
router.post('/',SigninController.signinForm);

module.exports = router;