const Listing = require("../models/listingModel");
const mongoose = require("mongoose");

// Controller methods
const addListing = async (req, res) => {
  const {
    title,
    description,
    picture1,
    picture2,
    picture3,
    picture4,
    picture5,
    address,
    postalCode,
    city,
    surface,
    roomCOunt,
    rent,
    transport,
    elevator,
    internet,
    electricity,
    water,
    parking,
    disability,
  } = req.body;

  // Check if name and bio properties are present in the request body
  if (
    !title ||
    !description ||
    !picture1 ||
    !address ||
    !postalCode ||
    !city ||
    !surface ||
    !roomCOunt ||
    !rent ||
    !transport ||
    !elevator ||
    !internet ||
    !electricity ||
    !water ||
    !parking ||
    !disability
  ) {
    return res
      .status(400)
      .json({ message: "Please provide the details of your listing" });
  }
  try {
    const listing = await Listing.create({
      title,
      description,
      picture1,
      picture2,
      picture3,
      picture4,
      picture5,
      address,
      postalCode,
      city,
      surface,
      roomCount,
      rent,
      transport,
      elevator,
      internet,
      electricity,
      water,
      parking,
      disability,
    });
    res.status(201).json(listing);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getAllListings = async (req, res) => {
  try {
    const listings = await Listing.find({}).sort({ createdAt: -1 });
    res.status(200).json(listings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getDetailsById = async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such listings found" });
  }

  try {
    res.status(200).json(listing);
  } catch (err) {
    res.status(500).json({ error: "listing data could not be retrieved" });
  }
};

/*const getFiltered = async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such listings found" });
  }

  try {
    res.status(200).json(listing);
  } catch (err) {
    res.status(500).json({ error: "listing data could not be retrieved" });
  }
};*/

const deleteListing = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such user" });
  }
  try {
    const listing = await Listing.findByIdAndDelete(id);
    res.status(200).json(listing);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const changeListingDetails = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such listing found" });
  }
  try {
    const listing = await Listing.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
      overwrite: true,
    });
    res.status(200).json(listing);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  addListing,
  getAllListings,
  getDetailsById,
  //getFiltered,
  deleteListing,
  changeListingDetails,
};
