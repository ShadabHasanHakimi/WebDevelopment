// Require essential packages : 1
const express = require("express");
const app = express();
const mongoose = require("mongoose");

const path = require("path");

// for using layout function and ejs-mate
const ejsMate = require("ejs-mate");
app.engine('ejs', ejsMate);

// Require Listing DB : 6
const Listing = require("./models/listing.js");

// for PUT request
const methodOverride = require("method-override");

// connecting wonderlust database : 4
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main().then(() => {
    console.log("Connected to DB!");
}).catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect(MONGO_URL);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
// for parsing data from params
app.use(express.urlencoded({extended: true}));
// for put request
app.use(methodOverride("_method"));
// for using static files like css
app.use(express.static(path.join(__dirname, "/public")));

// creating basic api : 3
app.get("/", (req, res) => {
    res.send("root working!");
});

// index route
app.get("/listings", async (req, res) => {
    const allListings = await Listing.find({});
    res.render("./listings/index.ejs", {allListings});
});

// if we define new route before show route then it will search "new" as id and give an error
// new route
app.get("/listings/new", (req, res) => {
    res.render("./listings/new.ejs");
});

// post request
app.post("/listings", async (req, res) => {
    // let {title, description, image, price, country, location} = req.body;
    // or
    // let listing = req.body;
    const newListing = new Listing(req.body.Listing);
    console.log(newListing);
    await newListing.save();
    res.redirect("/listings");
});

// show route
app.get("/listings/:id", async (req, res) => {
    const {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("./listings/show.ejs", {listing});
});

// edit route
app.get("/listings/:id/edit", async (req, res) => {
    const {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("./listings/edit.ejs", {listing});
});

app.post("/listings/:id", async (req, res) => {
    const {id} = req.params;
    const {title: newTitle, description: newDescription, image: newImage, price: newPrice, location: newLocation, country: newCountry} = req.body;
    await Listing.findByIdAndUpdate(id, {title: newTitle, description: newDescription, image: newImage, price: newPrice, location: newLocation, country: newCountry}, {runValidators: true, new: true});
    res.redirect("/listings");
});

// Delete route
app.delete("/listings/:id", async (req, res) => {
    const {id} = req.params;
    await Listing.findByIdAndDelete(id);
    res.redirect("/listings");
});

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

// creating port 8080 : 2
app.listen(8080, ()=> {
    console.log("server is listening to the port 8080!");
});