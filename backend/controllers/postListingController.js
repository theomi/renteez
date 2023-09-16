const Listing = require('../models/listingModel')
const mongoose = require('mongoose')

// Controller methods
const addListing = async (req, res) => {
  const { Title, Description, Picture1, Picture2, Picture3, Picture4, Picture5, Address, PostalCode, City, 
    Surface, RoomCOunt, Rent, Transport, Elevator, Internet, Electricity, Water, Parking, Disability } = req.body;

  // Check if name and bio properties are present in the request body
  if (!Title || !Description || !Picture1 || !Address || !PostalCode || !City || !Surface || !RoomCOunt || !Rent ||
    !Transport || !Elevator || !Internet || !Electricity || !Water || !Parking || !Disability ) {
    return res.status(400).json({ message: "Please provide the details of your listing" });
  }
  try {
    const listing = await Listing.create({ Title, Description, Picture1, Picture2, Picture3, Picture4, Picture5, Address, PostalCode, City, 
      Surface, RoomCOunt, Rent, Transport, Elevator, Internet, Electricity, Water, Parking, Disability })
    res.status(201).json(listings);
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
};


const getAllListings = async (req, res) => {
  const listings = await Listing.find({}).sort({createdAt: -1})
  try{
    res.status(200).json(home, listings);
  } catch (err) {
    res.status(400).json({error: err.message})
  }
};


const deleteListing = (req, res) => {
  const id  = parseInt(req.params.id);

  // Find the index of the user with the specified ID
  const index = listings.findIndex(u => u.id === id);

  // If the user is not found, respond with a 404 status code and a message
  if (index === -1) {
    return res.status(404).json({ message: "The user with the specified ID does not exist" });
  }

  // Remove the user from the array and store the deleted user
  const deletedListings = listings.splice(index, 1)[0];

  // Respond with the deleted user
  res.json(deletedListings);
};

const changeListingDetails = (req, res) => {
    const id  = parseInt(req.params.id);
  const { Name, Occupation } = req.body;

  // Find the index of the user with the specified ID
  const index = listings.findIndex(u => u.id === id);

  // If the user is not found, respond with a 404 status code and a message
  if (index === -1) {
    return res.status(404).json({ message: "The user with the specified ID does not exist" });
  }

  // Check if name and bio properties are present in the request body
  if (!Name || !Occupation) {
    return res.status(400).json({ message: "Please provide name and bio for the user" });
  }

  // Update the user's name and bio
  listings[index].Name = Name;
  listings[index].Occupation = Occupation;

  // Respond with the updated user
  res.json(listings[index]);
};

module.exports = {
  addListing,
  getAllListings,
  deleteListing,
  changeListingDetails,
};