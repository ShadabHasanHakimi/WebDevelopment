const express = require("express");
const app = express();

const port = 8080;

app.set("view engine", "ejs");

const path = require("path");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
    res.render("2_interpolationSyntax");
});

// passing data to ejs
// search "http://localhost:8080/rolldice"
app.get("/rolldice", (req, res)=>{
    // Let's assume that this variable diceValue is from database
    let diceValue = Math.floor(Math.random()*6+1);
    // then we will pass an object as second argument in res.render()
    // now we can access num in the 2_rolldice.ejs file
    res.render("2_rolldice.ejs", {num: diceValue});
});

app.listen(port, ()=>{
    console.log(`listening on port 8080!`);
});