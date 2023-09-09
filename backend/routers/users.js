const express = require('express');
const router = express.Router();

// Import user controller
const UserController = require('../controllers/usersController');

// Define routes
router.get('/:id', UserController.getUserById);
//router.get('userContact/:id', UserController.getContact);

module.exports = router;