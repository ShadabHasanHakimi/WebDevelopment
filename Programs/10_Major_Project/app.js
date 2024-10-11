// Require essential packages : 1
const express = require("express");
const app = express();
const mongoose = require("mongoose");

const path = require("path");

// for using layout function and ejs-mate
const ejsMate = require("ejs-mate");
app.engine("ejs", ejsMate);
// for PUT request
const methodOverride = require("method-override");

// connecting wonderlust database : 4
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

const ExpressError = require("./utils/ExpressError.js");
const session = require("express-session");
const flash = require("connect-flash");

// using router
const listings = require("./routes/listing.js");
const reviews = require("./routes/review.js")

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

const sessionOptions = {
  secret: "mysupersecretcode",
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24* 60 * 60 * 1000,
    httpOnly: true,
  },
}

app.use(session(sessionOptions));

// use flash before routes
app.use(flash());

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  next();
})

// creating basic api : 3
app.get("/", (req, res) => {
  res.send("root working!");
});

app.use("/listings", listings);
app.use("/listings/:id/reviews", reviews);

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