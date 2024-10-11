const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { listingSchema } = require("../schema.js");
// Require Listing DB
const Listing = require("../models/listing.js");

const validateListing = (req, res, next) => {
  let { error } = listingSchema.validate(req.body);

  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

// index route
router.get(
  "/",
  wrapAsync(async (req, res) => {
    const allListings = await Listing.find({});
    res.render("./listings/index.ejs", { allListings });
  })
);

// if we define new route before show route then it will search "new" as id and give an error
// new route
router.get("/new", (req, res) => {
  res.render("./listings/new.ejs");
});

// post request
// create route
router.post(
  "/",
  wrapAsync(async (req, res, next) => {
    const newListing = new Listing(req.body.Listing);
    await newListing.save();
    // displaying flash message
    req.flash("success", "New Listing Created!");
    res.redirect("/listings");
  })
);

// show route
router.get(
  "/:id",
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    // populate will send reviews with body
    const listing = await Listing.findById(id).populate("reviews");
    if(!listing){
      req.flash("error", "Listing does not exists!");
      res.redirect("/listings");
    }
    res.render("./listings/show.ejs", { listing });
  })
);

// edit route
router.get(
  "/:id/edit",
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("./listings/edit.ejs", { listing });
  })
);

// update
router.post(
  "/:id",
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    const {
      title: newTitle,
      description: newDescription,
      image: newImage,
      price: newPrice,
      location: newLocation,
      country: newCountry,
    } = req.body;
    await Listing.findByIdAndUpdate(
      id,
      {
        title: newTitle,
        description: newDescription,
        image: newImage,
        price: newPrice,
        location: newLocation,
        country: newCountry,
      },
      { runValidators: true, new: true }
    );
    res.redirect("/listings");
  })
);

// Delete route
router.delete(
  "/:id",
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success", "Listing Deleted!");
    res.redirect("/listings");
  })
);

module.exports = router;