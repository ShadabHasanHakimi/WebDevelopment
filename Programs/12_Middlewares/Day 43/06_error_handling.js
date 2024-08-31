const express = require("express")
const app = express();

app.get("/", (req, res)=> {
    res.send("Hi, I am root!");
});

// express have an inbuilt default error handler which returns error code automatically
// creating error
app.get("/wrong", (req, res) => {
    abc = abc;
})

app.listen(8080, () => {
    console.log("Listening on port 8080!");
});