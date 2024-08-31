const express = require("express")
const app = express()

app.use((req, res)=>{
    console.log("Hi, I am middleware!");
    res.send("Hi middleware finished!")
});

app.get("/", (req, res)=> {
    res.send("");
});

app.listen(8080, ()=> {
    console.log("Listening on port 8080");
});