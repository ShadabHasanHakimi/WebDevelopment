const express = require("express");
const app = express();
const path = require("path");
const ejs = require("ejs");

const port = 8080;

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

const {v4: uuidv4} = require("uuid");

let posts = [
    {
        id: uuidv4(),
        username: "shadabhasan",
        photo: "https://th.bing.com/th/id/OIP.GzUh30A6bPhNeveyXenw9gHaEK?rs=1&pid=ImgDetMain",
        caption: "With great power comes great responsibility. And a cool suit."
    },
    {
        id: uuidv4(),
        username: "adabhasan",
        photo: "https://th.bing.com/th/id/OIP.0qSKyqmyLBha1X04y2o3zAAAAA?rs=1&pid=ImgDetMain",
        caption: "If You Are Fated, It Doesn’t Matter If You Choose Or Not."
    }
];

app.get("/posts", (req, res) => {
    res.render("index.ejs", {posts});
});

app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});

app.post("/posts", (req, res) => {
    let {username, photo, caption} = req.body;
    posts.push({username, photo, caption});
    console.log(username, photo, caption);
    res.redirect("/posts")
});

app.get("/posts/:id/edit", (req, res) => {
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs", {post});
});

app.patch("/posts/:id", (req, res) => {
    let {id} = req.params;
    let newContent = req.body.content;
    console.log(newContent);
    let post = posts.find((p) => id === p.id);
    post.content = newContent;
    console.log(post);
    res.redirect("/posts/");
});

app.listen(port, ()=>{
    console.log("listening on port 8080");
});