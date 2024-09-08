// Require essential packages : 1
const express = require("express");
const app = express();
const mongoose = require("mongoose");

const path = require("path");

// for using layout function and ejs-mate
const ejsMate = require("ejs-mate");
app.engine("ejs", ejsMate);

// Require Listing DB : 6
const Listing = require("./models/listing.js");

// for PUT request
const methodOverride = require("method-override");

// connecting wonderlust database : 4
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

const wrapAsync = require("./utils/wrapAsync.js");

const ExpressError = require("./utils/ExpressError.js");

const { listingSchema } = require("./schema.js");

main()
  .then(() => {
    console.log("Connected to DB!");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
// for parsing data from params
app.use(express.urlencoded({ extended: true }));
// for put request
app.use(methodOverride("_method"));
// for using static files like css
app.use(express.static(path.join(__dirname, "/public")));

// creating basic api : 3
app.get("/", (req, res) => {
  res.send("root working!");
});

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
app.get(
  "/listings",
  wrapAsync(async (req, res) => {
    const allListings = await Listing.find({});
    res.render("./listings/index.ejs", { allListings });
  })
);

// if we define new route before show route then it will search "new" as id and give an error
// new route
app.get("/listings/new", (req, res) => {
  res.render("./listings/new.ejs");
});

// post request
// create route
app.post(
  "/listings",
  validateListing,
  wrapAsync(async (req, res, next) => {
    // let {title, description, image, price, country, location} = req.body;
    // or
    // let listing = req.body;

    // we can used joi for schema validation
    // joi is a npm package
    // if(!req.body.listing){
    //     throw new ExpressError(400, "Send valid data for listing")
    // }
    // if(!newListing.title){
    //   throw new ExpressError(400, "Title is missing!");
    // }
    // if(!newListing.description){
    //   throw new ExpressError(400, "Description is missing!");
    // }
    // if(!newListing.price){
    //   throw new ExpressError(400, "Price is missing!");
    // }
    // if(!newListing.location){
    //   throw new ExpressError(400, "Location is missing!");
    // }

    const newListing = new Listing(req.body.Listing);
    await newListing.save();
    res.redirect("/listings");
  })
);

// show route
app.get(
  "/listings/:id",
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("./listings/show.ejs", { listing });
  })
);

// edit route
app.get(
  "/listings/:id/edit", validateListing,
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("./listings/edit.ejs", { listing });
  })
);

app.post("/listings/:id", wrapAsync(async (req, res) => {
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
}));

// Delete route
app.delete(
  "/listings/:id",
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    await Listing.findByIdAndDelete(id);
    res.redirect("/listings");
  })
);

// add a testing data
// app.get("/testListing", async (req, res) => {
//   let sampleListing = new Listing({
//     title: "My New Villa",
//     description: "By the beach",
//     price: 1200,
//     location: "Calangute, Goa",
//     country: "India",
//   });

//   await sampleListing.save();
//   console.log("sample was saved");
//   res.send("successful testing");
// });

// for every other not available path
app.all("*", (req, res, next) => {
  next(new ExpressError(404, "Page not found!"));
});

// error handeling middleware
app.use((err, req, res, next) => {
  let { statusCode = 500, message = "Something went wrong!" } = err;
  // showing custom error page
  res.status(statusCode).render("error.ejs", { err });
  // res.status(statusCode).send(message);
});

// creating port 8080 : 2
app.listen(8080, () => {
  console.log("server is listening to the port 8080!");
});
