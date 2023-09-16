const express = require('express');
const {
    getUserById
  } = require('../controllers/usersController')

const router = express.Router();

// GET user by id
router.get('/:id', getUserById);

module.exports = router;