// Creating logger
// log : printing useful info to console or terminal

const express = require("express");
const app = express();

// inbuilt logger: morgan

// creating logger middleware, a utility middleware
app.use((req, res, next) => {
    // human readable format
    // req.time = new Date(Date.now()).toString();
    // we can convert it afterwards
    req.time = Date.now();
    console.log(req.method, req.hostname, req.time);
    next();
});

// defining middleware for a particular path (random)
app.use("/random", (req, res, next) => {
    console.log("Hi, I am only for random because path is specified!");
    next();
})

app.get("/", (req, res) => {
    res.send("Hi, this is root!");
});

app.get("/random", (req, res) => {
    res.send("This is a random page!")
})

// This middleware will run when path is not correct, cuz it is defined in last
app.use((req, res, next) => {
    res.send("Page not found!")
    next();
});

app.listen(8080, () => {
    console.log("Listening to port 8080!");
});