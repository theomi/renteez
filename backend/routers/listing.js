const express = require("express");
const {
  addListing,
  getAllListings,
  getAllUserListings,
  getDetailsById,
  getFiltered,
  deleteListing,
  changeListingDetails,
} = require("../controllers/listingController");

const router = express.Router();
const { generateAuthToken } = require("../middleware/authentication");

// POST a listing
router.post("/", generateAuthToken, addListing);
// GET all listing
router.get("/", getAllListings);
// GET all user owned listing
router.get("/userlistings", generateAuthToken, getAllUserListings);
// GET filtered
router.get("/filtered", getFiltered);
// GET listing by id
router.get("/:id", getDetailsById);
// DELETE a listing
router.delete("/:id", generateAuthToken, deleteListing);
// PUT a listing
router.put("/:id", generateAuthToken, changeListingDetails);

module.exports = router;
