const User = require("../models/userModel");
const auth = require("../middleware/authentication");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const signinForm = async (req, res) => {
  const { email, password } = req.body;

  // Check if username and password properties are present in the request body
  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required" });
  }

  try {
    // Find the user by username
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    const comparePasswords = await bcrypt.compare(password, user.password);
    if (!comparePasswords) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    const userObject = {
      _id: user._id,
    };
    // If the password is correct, you can generate an authentication token (JWT) here
    const token = auth.generateAuthToken(userObject); // Implement this function to generate a token

    // Respond with the token and any other user-related data you want to send
    res.status(200).json({ token, user: user.toJSON() });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  signinForm,
};
