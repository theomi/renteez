const express = require('express');
const router = express.Router();

// Import user controller
const SignupController = require('../controllers/signupController');

// Define routes
router.post('/', SignupController.createUser);

module.exports = router;