const User = require("../models/userModel");
const mongoose = require("mongoose");

const getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such listings found" });
  }

  try {
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteUserById = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such user found" });
  }
  try {
    const user = await User.findByIdAndDelete(id);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const changeDetails = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such listing found" });
  }
  try {
    const user = await User.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
      overwrite: true,
    });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getUserById,
  deleteUserById,
  changeDetails,
};
