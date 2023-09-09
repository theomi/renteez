const express = require('express');
const router = express.Router();

// Import user controller
const PostListingsController = require('../controllers/postListingController');

// Define routes
router.post('/', PostListingsController.addListing);
router.get('/', PostListingsController.getAllListings);
router.delete('/:id', PostListingsController.deleteListing);
router.put('/:id', PostListingsController.changeListingDetails);

module.exports = router;