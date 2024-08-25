const express = require("express")
const app = express()

app.use(()=>{
    console.log("Hi, I am middleware!");
});

app.get("/", (req, res)=> {
    res.send("");
});

app.listen((req, res)=> {
    res.send("Listening on port 8080");
});