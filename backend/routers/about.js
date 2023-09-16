const express = require('express');
const {
  getAbout
} = require('../controllers/aboutController')

const router = express.Router();

// GET compnay: about
router.get('/', getAbout);

module.exports = router;