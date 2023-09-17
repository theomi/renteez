const express = require("express");
const {
  getUserById,
  deleteUserById,
  changeDetails,
} = require("../controllers/usersController");

const router = express.Router();

// GET user by id
router.get("/:id", getUserById);
// DELETE a user by id
router.delete("/:id", deleteUserById);
// PUT change user details
router.put("/:id", changeDetails);

module.exports = router;
