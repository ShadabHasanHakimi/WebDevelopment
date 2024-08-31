const express = require("express");
const app = express();

// using next for executing next call after middleware
// middlewares will run even if the paths are wrong, or there is any mistake
app.use((req, res, next)=>{
    console.log("This is first middleware");
    // next();
    // // We can execute anything after next but it is not used generally
    // console.log("After next");

    // we can also return next so that nothing executes after that
    return next();
    console.log("will not be executed");
});

app.use((req, res, next)=>{
    console.log("This is second middleware");
    next();
});

app.get("/", (req, res)=> {
    res.send("This is root");
});

app.listen(8080, () => {
    console.log("Listening on port 8080!");
});