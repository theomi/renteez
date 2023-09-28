const express = require("express");
const { createUser } = require("../controllers/signupController");

const router = express.Router();
const { generateAuthToken } = require("../middleware/authentication");

// POST a new user
router.post("/", createUser);

module.exports = router;
