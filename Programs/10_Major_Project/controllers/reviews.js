const Listing = require("../models/listing");
const Review = require("../models/listing");

// Not working, giving error "path `title` is required"
module.exports.createReview = async (req, res) => {
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);
    newReview.author = req.user._id;
    listing.reviews.push(newReview);

    await newReview.save();
    await listing.save();

    req.flash("success", "New Review Created!");
    res.redirect(`/listings/${listing._id}`);
  }

module.exports.destroyReview = async (req, res) => {
    let { id, reviewId } = req.params;

    // deleting review from review array of listing (for this we will use pull operator)
    // we will pull the review with reviewId from the array
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    // Deleting review
    await Review.findByIdAndDelete(reviewId);

    req.flash("success", "Review Deleted!");
    res.redirect(`/listings/${id}`);
  }