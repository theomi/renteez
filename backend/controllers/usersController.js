const mongoose = require("mongoose");
const User = require("../models/userModel");

const getUserById = async (req, res, next) => {
  try {
    const userId = req.user._id;
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(404).json({ error: "No such user found" });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteUserById = async (req, res, next) => {
  try {
    const userId = req.user._id;
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(404).json({ error: "No such user found" });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const deletedUser = await User.findByIdAndDelete(user._id);
    res.status(200).json({
      message:
        deletedUser.first_name +
        " " +
        deletedUser.last_name +
        " has been deleted",
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const changeDetails = async (req, res, next) => {
  try {
    const userId = req.user._id;
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(404).json({ error: "No such user found" });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const updatedUser = await User.findOneAndUpdate(user._id, req.body, {
      new: true,
      overwrite: true,
    });
    res.status(200).json({
      message: "Details for " + updatedUser.last_name + " has been updated",
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getUserById,
  deleteUserById,
  changeDetails,
};
