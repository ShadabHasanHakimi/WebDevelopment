const express = require("express");
// ejs is internally required by express, so we don't have to require it seperately
const app = express();

const port = 8080;

app.set("view engine", "ejs");

// for using this server outside the home directory
// "path.join()" is used to join two paths
const path = require("path");
app.set("views", path.join(__dirname, "/views"));

// we can send file using ejs
app.get("/", (req, res) => {
    // in EJS we do "res.render" instead of "res.send"
    // res.render("home.ejs");
    res.render("2_home");
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});