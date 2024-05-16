const express = require("express");
const app = express();
const path = require("path");


const port = 8080;

app.use(express.static("public"));
// for using public outside the main folder
app.use(express.static(path.join(__dirname, "/public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/ig/:username", (req, res)=>{
    // Let us suppose that this data is from database
    const instaData = require("./data.json");
    let {username} = req.params;
    let data = instaData[username];
    console.log(data);
    if(data){
        res.render("3_InstagramEJS.ejs", {data});
    }
    else{
        res.render("3_error");
    }
});

app.listen(port, ()=>{
    console.log(`listening to the port: ${port}`);
});