// Require essential packages : 1
const express = require("express");
const app = express();
const mongoose = require("mongoose");

const path = require("path");


// Require Listing DB : 6
const Listing = require("./models/listing.js");

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

// creating basic api : 3
app.get("/", (req, res) => {
    res.send("root working!");
});

// index route
app.get("/listings", (req, res) => {
    Listing.find({}).then((res) => {
        console.log(res);
    });
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