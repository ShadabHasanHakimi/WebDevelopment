const express = require("express");
const app = express();

const ejs = require("ejs");

const port = 8080;

const path = require("path");

const  bodyParser = require("body-parser");
app.use(bodyParser.json());
// using uuid package to create unique uuid
const {v4: uuidv4} = require("uuid");

app.use(express.urlencoded({extended: true}))

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));


let posts = [
    {
        id: uuidv4(),
        username: "shadabhasanhakimi",
        content: "I love coding!",
    },
    {
        id: uuidv4(),
        username: "adabhasan",
        content: "Hardword is the key for success!",
    },
    {
        id: uuidv4(),
        username: "shafatkhan",
        content: "Jaipur ka gunda hu mai!",
    },
];

app.get("/posts/:id", (req, res) => {
    let {id} = req.params;
    // posts.find() finds posts according to their id
    let post = posts.find((p) => id === p.id);
    console.log(post);
    res.render("show.ejs", {post});
});

// Get Posts
app.get("/posts", (req, res) => {
    res.render("index.ejs", {posts});
});

// add post
app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});

// this will post request
app.post("/posts", (req, res) =>{
    let {username, content} = req.body;
    posts.push({username, content});
    console.log(username, content);
    // res.redirect() is used to redirect the page after request is complete
    res.redirect("/posts");
});

app.patch("/posts/:id", (req, res) => {
    let {id} = req.params;
    let newContent = req.body.content;
    console.log(id);
    console.log(newContent);
    let post = posts.find((p) => id === p.id);
    post.content = newContent;
    console.log(post);
    res.send("patch request working");
});

app.listen(port, ()=>{
    console.log(`listening to the port ${port}`);
});