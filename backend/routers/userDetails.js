const express = require('express');
const router = express.Router();

// Import user controller
const UserDetailsController = require('../controllers/userDetailsController');

// Define routes
router.get('/:id', UserDetailsController.getUserById);
router.delete('/:id', UserDetailsController.deleteUserById);
router.put('/:id', UserDetailsController.changeDetails);

module.exports = router;