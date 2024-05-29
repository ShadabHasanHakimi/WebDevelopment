const express = require('express');
const app = express();
const port = 8080;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// app.use((req, res) =>{
//     console.log("request received!");
//     // Sending a response
//     // res.send("This is a basic response!")
//     let code = "<h1>Fruits</h1><ul><li>Apple</li><li>Mango</li></ul>"
//     res.send(code);
// })

// Routing: It is a process of selecting a path for traffic in a network or between or across multiple networks. "/" is the root path

// app.get is used to send response to a particular path. "/" is the root path.

app.get("/", (req, res) => {
  res.send("you are on root path!");
});

app.get("/apple", (req, res) => {
  res.send("you are on path apple!");
});

// app.get("*", (req, res)=>{
//   res.send("you are on '*', this path don't exist!");
// });

// post request: change "get" to "post" on hoppscotch
app.post("/", (req, res)=>{
  res.send("you sent a post request!");
});

// path parameters: sending variables

// app.get("/:username/:id", (req, res) => {
//   console.log(req.params); // shows all the parameters sent with req
//   let {username, id} = req.params;
//   res.send(`welcome ${username}, your id is ${id}`);
// })

app.get("/search", (req, res) =>{
  console.log(req.query);
  let {q} = req.query;
  res.send(`search result for query: ${q}`);
})