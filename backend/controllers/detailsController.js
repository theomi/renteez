const Listing = require('../models/listingModel')
const mongoose = require('mongoose')

const getDetailsById = async (req, res) => {
    const { id } = req.params
    const listing = await Listing.findById(id)
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({error: 'No such listings found'})
    }
  
    try{
      res.status(200).json(listing)
    } catch (err) {
      res.status(500).json({error: 'listing data could not be retrieved'})
    }
  }

module.exports = {
    getDetailsById
};