// API token acts as a password for using APIs
// now we are going to create a middleware for an api that checks if the access token was passed in the query string or not

const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

// app.use("/api", (req, res, next) => {
//     // extracting token value from query
//     let {token} = req.query;
//     console.log(token);

//     if(token === "giveaccess"){
//         next();
//     }
//     res.send("ACCESS DENIED");
// });

// We can also use middlewares as functions
const checkToken =
  (req, res, next) => {
    // extracting token value from query
    let { token } = req.query;
    console.log(token);

    if (token === "giveaccess") {
      next();
    }
    res.send("ACCESS DENIED");
  };

app.get("/api", checkToken, (req, res) => {
  res.send("data");
});

app.listen(8080, (req, res) => {
  console.log("Listening on port 8080");
});
