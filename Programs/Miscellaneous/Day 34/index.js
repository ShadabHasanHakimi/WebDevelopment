const express = require("express");
const app = express();

const ejs = require("ejs");

const port = 8080;

const path = require("path");

app.use(express.urlencoded({extended: true}))

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));


let posts = [
    {
        username: "shadabhasanhakimi",
        content: "I love coding!",
    },
    {
        username: "adabhasan",
        content: "Hardword is the key for success!",
    },
    {
        username: "shafatkhan",
        content: "Jaipur ka gunda hu mai!",
    },
];

// Get Posts
app.get("/posts", (req, res) => {
    res.render("index.ejs", {posts});
});

app.listen(port, ()=>{
    console.log(`listening to the port ${port}`);
});