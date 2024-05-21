const express = require("express");
const app = express();

const port = 8080;

app.get("/register", (req, res) => {
    let {user, password} = req.query;
    res.send(`standard GET response, Welcome ${user}`);
});

// For handling post request body, we can follow two steps:
// Set up POST request route to get some response
app.use(express.urlencoded({extended: true}));

// Parse POST request data
app.use(express.json());

app.post("/register", (req, res) => {
    console.log(req.body);
    let {user, password} = req.body;
    res.send(`standard POST response, Welcome ${user}`);
});

app.listen(port, () => {
    console.log("Listening to the port 8080!");
});