const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/ig/:username", (req, res)=>{
    let {username} = req.params;
    console.log(`username: ${username}`);
    res.render("3_InstagramEJS.ejs", {username: username});
});

app.listen(port, ()=>{
    console.log(`listening to the port: ${port}`);
});