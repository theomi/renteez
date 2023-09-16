// Sample user data array
const home = "This is the home page!";
const Listing = require('../models/listingModel')
const mongoose = require('mongoose')

const getHome = async (req, res) => {
  const listings = await Listing.find({}).sort({createdAt: -1})
  try{
    res.status(200).json(home, listings);
  } catch (err) {
    res.status(400).json({error: err.message})
  }
};

module.exports = {
  getHome
};