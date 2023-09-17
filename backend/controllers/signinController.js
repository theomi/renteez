const User = require("../models/userModel");
const mongoose = require("mongoose");

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

    // Compare the provided password with the stored password hash
    //const passwordMatch = await user.comparePassword(password);

    if (password != user.password) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    // If the password is correct, you can generate an authentication token (JWT) here
    //const token = generateAuthToken(user); // Implement this function to generate a token

    // Respond with the token and any other user-related data you want to send
    res.status(200).json({ /*token, */ user: user.toJSON() });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  signinForm,
};
