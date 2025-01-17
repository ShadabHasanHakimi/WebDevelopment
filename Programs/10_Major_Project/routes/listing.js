const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");

const listingController = require("../controllers/listings.js");

const multer = require("multer");

// cloudinary
const { storage } = require("../cloudConfig.js");

const upload = multer({ storage });

// index route and create route
router
  .route("/")
  .get(wrapAsync(listingController.index))
  .post(
    isLoggedIn,
    upload.single("Listing[image]"),
    wrapAsync(listingController.createListing)
  );

// if we define new route before show route then it will search "new" as id and give an error
// new route
router.get("/new", isLoggedIn, listingController.renderNewForm);

// show, update and delete route
router
  .route("/:id")
  .get(wrapAsync(listingController.showListing))
  .put(isLoggedIn, isOwner, upload.single("Listing[image]"), wrapAsync(listingController.updateListing))
  .delete(isLoggedIn, isOwner, wrapAsync(listingController.destroyListing));

// edit route
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(listingController.renderEditForm)
);

module.exports = router;
