const Listing = require("../models/listingModel");
const mongoose = require("mongoose");

// Controller methods
const addListing = async (req, res, next) => {
  const userId = req.user._id;
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
    roomCount,
    rent,
    transport,
    elevator,
    internet,
    electricity,
    water,
    parking,
    disability,
  } = req.body;

  if (
    !title ||
    !description ||
    !picture1 ||
    !address ||
    !postalCode ||
    !city ||
    !surface ||
    !roomCount ||
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
      createdBy: userId,
    });
    res.status(201).json(listing);
    next();
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getAllListings = async (req, res, next) => {
  try {
    const listings = await Listing.find({}).sort({ createdAt: -1 });
    res.status(200).json(listings);
    next();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getAllUserListings = async (req, res, next) => {
  try {
    const createdBy = req.user._id;
    const listings = await Listing.find({ createdBy }).sort({ createdAt: -1 });
    res.status(200).json(listings);
    next();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getDetailsById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: "No such listing found" });
    }
    const listing = await Listing.findById(id);
    if (!listing) {
      return res.status(404).json({ message: "No such listing found" });
    }
    res.status(200).json(listing);
    next();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getFiltered = async (req, res) => {
  const {
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
  } = req.body;

  try {
    const filter = {};
    if (postalCode) {
      filter.postalCode = postalCode;
    }
    if (city) {
      filter.city = city;
    }
    if (surface && !isNaN(surface)) {
      filter.surface = { $gt: parseFloat(surface) };
    }

    if (roomCount && !isNaN(roomCount)) {
      filter.roomCount = { $lt: parseInt(roomCount) };
    }
    if (rent && !isNaN(rent)) {
      filter.rent = { $lt: parseFloat(rent) };
    }
    if (transport && !isNaN(transport)) {
      filter.transport = { $lt: parseInt(transport) };
    }
    if (elevator) {
      filter.elevator = elevator;
    }
    if (internet) {
      filter.internet = internet;
    }
    if (electricity) {
      filter.electricity = electricity;
    }
    if (water) {
      filter.water = water;
    }
    if (parking) {
      filter.parking = parking;
    }
    if (disability) {
      filter.disability = disability;
    }

    const query = Listing.find(filter).sort({ createdAt: -1 });

    const filteredListings = await query.exec();

    res.status(200).json(filteredListings);
    next();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteListing = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such listing found" });
  }
  try {
    const listing = await Listing.findByIdAndDelete(id);
    res.status(200).json({ message: id + " has been deleted" });
    next();
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const changeListingDetails = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such listing found" });
  }
  try {
    const oldListing = await Goal.findById(id);
    if (!oldListing) {
      return res.status(404).json({ error: "Listing not found" });
    }
    const listing = await Listing.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
      overwrite: true,
    });
    res.status(200).json(listing);
    next();
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  addListing,
  getAllListings,
  getAllUserListings,
  getDetailsById,
  getFiltered,
  deleteListing,
  changeListingDetails,
};
