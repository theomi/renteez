const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const listingSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    picture: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    postalCode: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    surface: {
      type: String,
      required: true,
    },
    roomCount: {
      type: String,
      required: true,
    },
    rent: {
      type: String,
      required: true,
    },
    charges: {
      type: String,
      required: true,
    },
    transport: {
      type: String,
      required: true,
    },
    //service
    elevator: {
      type: String,
      required: true,
    },
    //service
    internet: {
      type: String,
      required: true,
    },
    //service
    electricity: {
      type: String,
      required: true,
    },
    //service
    water: {
      type: String,
      required: true,
    },
    //service
    parking: {
      type: String,
      required: true,
    },
    //service
    disability: {
      type: String,
      required: true,
    },
    createdBy: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Listing", listingSchema);
