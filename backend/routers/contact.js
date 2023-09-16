const express = require('express');
const {
    getContact
  } = require('../controllers/contactController')

const router = express.Router();

// GET company contact
router.get('/', getContact);

module.exports = router;