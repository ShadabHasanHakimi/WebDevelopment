// Creating error handling middlewares
const express = require("express")
const app = express()

const ExpressError = require("./05_custom_error.js");

app.get("/err", (req, res) => {
    abc = abc
});

// app.use((err, req, res, next) => {
//     // console.log("----Error----");
//     throw new ExpressError(401, "ACCESS DENIED");
//     // this will trigger inbuilt error handler otherwise it will find other error handling middleware and cannot find /err will appear
//     next(err);
// ;})

// creating customized error handler

app.use((err, req, res, next) => {
    // We have to set default value of status otherwise it will generate range error
    let {status=500, message="Some error occured!"} = err;
    res.status(status).send(message);
});

// Activity
app.get("/admin", (req, res) => {
    throw new ExpressError(401, "ACCESS DENIED");
});

app.listen(8080, () => {
    console.log("Listening on port 8080!");
});