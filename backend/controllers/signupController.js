const User = require("../models/userModel");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// Controller methods
const createUser = async (req, res) => {
  const { title, first_name, last_name, email, password, phone } = req.body;
  if (!title || !first_name || !last_name || !email || !password) {
    return res
      .status(400)
      .json({ message: "Please provide the complete info" });
  }
  try {
    const salt = await bcrypt.genSalt(13);
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log(hashedPassword);
    const user = await User.create({
      title,
      first_name,
      last_name,
      email,
      password: hashedPassword,
      phone,
    });
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createUser,
};
