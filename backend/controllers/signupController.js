const User = require("../models/userModel");
const mongoose = require("mongoose");

// Controller methods
const createUser = async (req, res) => {
  const { title, first_name, last_name, email, password, phone } = req.body;
  if (!title || !first_name || !last_name || !email || !password) {
    return res
      .status(400)
      .json({ message: "Please provide the complete info" });
  }
  try {
    const user = await User.create({
      title,
      first_name,
      last_name,
      email,
      password,
      phone,
    });
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  createUser,
};
