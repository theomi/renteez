const express = require('express');
const {
    createUser
  } = require('../controllers/signupController')

const router = express.Router();

// POST a new user
router.post('/', createUser);

module.exports = router;