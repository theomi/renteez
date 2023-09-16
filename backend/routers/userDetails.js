const express = require('express');
const {
    getUserDetailById,
    deleteUserById,
    changeDetails
  } = require('../controllers/userDetailsController')
const router = express.Router();

// GET user by id
router.get('/:id', getUserDetailById);
// DELETE a user by id
router.delete('/:id', deleteUserById);
// PUT change user details
router.put('/:id', changeDetails);

module.exports = router;