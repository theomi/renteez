const express = require("express");
const {
  getUserById,
  deleteUserById,
  changeDetails,
} = require("../controllers/usersController");

const router = express.Router();
const { generateAuthToken } = require("../middleware/authentication");

router.use(generateAuthToken);

// GET user by id
router.get("/me", getUserById);
// DELETE a user by id
router.delete("/me", deleteUserById);
// PUT change user details
router.patch("/me", changeDetails);

module.exports = router;
