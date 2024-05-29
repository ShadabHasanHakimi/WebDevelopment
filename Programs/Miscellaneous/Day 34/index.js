const express = require("express");
const app = express();

const ejs = require("ejs");

const port = 8080;

const path = require("path");

// using uuid package to create unique uuid
const {v4: uuidv4} = require("uuid");

app.use(express.json());

app.use(express.urlencoded({extended: true}));

// requiring method-override
const methodOverride = require("method-override");
app.use(methodOverride('_method'));

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

// For adding data to a existing post
// Using Hoppscotch to send patch request
app.patch("/posts/:id", (req, res) => {
    let {id} = req.params;
    let newContent = req.body.content;
    console.log(newContent);
    let post = posts.find((p) => id === p.id);
    post.content = newContent;
    console.log(post);
    res.redirect("/posts/");
});

// Edit route: Create form for update
app.get("/posts/:id/edit", (req, res) => {
    let {id} = req.params;
    console.log(id);
    posts = posts.find((p) => id === p.id);
    res.render("edit.ejs", {post});
});

// Destroy route: to delete a post
app.delete("/posts/:id", (req, res) => {
    let {id} = req.params;
    // posts.filter() will filter the posts whose id is !== given id
    posts = posts.filter((p) => id !== p.id);
    res.redirect("http://localhost:8080/posts/");
})

app.listen(port, ()=>{
    console.log(`listening to the port ${port}`);
});