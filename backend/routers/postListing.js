const express = require('express');
const {
    addListing,
    getAllListings,
    deleteListing,
    changeListingDetails
  } = require('../controllers/postListingController')

const router = express.Router();

// POST a listing
router.post('/', addListing);
// GET all listing
router.get('/', getAllListings);
// DELETE a listing
router.delete('/:id', deleteListing);
// PUT a listing
router.put('/:id', changeListingDetails);

module.exports = router;