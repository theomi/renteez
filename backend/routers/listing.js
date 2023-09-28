const express = require("express");
const {
  addListing,
  getAllListings,
  getAllUserListings,
  getDetailsById,
  //getFiltered,
  deleteListing,
  changeListingDetails,
} = require("../controllers/listingController");

const router = express.Router();
const { generateAuthToken } = require("../middleware/authentication");

router.use(generateAuthToken);

// POST a listing
router.post("/", addListing);
// GET all listing
router.get("/", getAllListings);
// GET all user owned listing
router.get("/", getAllUserListings);
// GET listing by id
router.get("/:id", getDetailsById);
// GET filtered
router.get("/", getFiltered);
// DELETE a listing
router.delete("/:id", deleteListing);
// PUT a listing
router.put("/:id", changeListingDetails);

module.exports = router;
