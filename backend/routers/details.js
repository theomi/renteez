const express = require('express');
const {
    getDetailsById
  } = require('../controllers/detailsController')

const router = express.Router();

// GET listing detail by id
router.get('/:id', getDetailsById);

module.exports = router;