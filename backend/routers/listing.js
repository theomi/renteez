const express = require("express");
const {
  addListing,
  getAllListings,
  getDetailsById,
  //getFiltered,
  deleteListing,
  changeListingDetails,
} = require("../controllers/listingController");

const router = express.Router();

// POST a listing
router.post("/", addListing);
// GET all listing
router.get("/", getAllListings);
// GET listing by id
router.get("/:id", getDetailsById);
// GET filtered
//router.get("/", getFiltered);
// DELETE a listing
router.delete("/:id", deleteListing);
// PUT a listing
router.put("/:id", changeListingDetails);

module.exports = router;
