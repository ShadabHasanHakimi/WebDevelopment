const express = require("express");
const app = express();
const path = require("path");
const ejs = require("ejs");

const port = 8080;

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

app.patch("/post/:id", (req, res) => {
    let id = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs", {post});
});

app.listen(port, ()=>{
    console.log("listening on port 8080");
});