const express = require('express');
const {
    getFiltered
  } = require('../controllers/browseController')

const router = express.Router();

// GET all filtered listings
router.get('/', getFiltered);

module.exports = router;