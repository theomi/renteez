const express = require('express');
const {
    signinForm
  } = require('../controllers/signinController')

const router = express.Router();

// POST for signin
router.post('/', signinForm);

module.exports = router;