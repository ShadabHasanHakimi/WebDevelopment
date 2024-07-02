const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const path = require("path");
const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// below we are creating connection to my sql workbench
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "delta_app",
  password: "@shadab786",
});

// inserting data in bulk using faker

// faker creates new data when called
let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.userName(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};


app.get("/", (req, res) => {
  let q = "SELECT COUNT(*) AS userCount FROM user";
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let count = result[0].userCount;
      res.render("home.ejs", {count});
    });
  } catch (err) {
    console.log(err);
    res.send("some error in DB!");
  }
});

app.listen("8080", () => {
  console.log("app is listening to port 8080!");
});
// try{
  //   connection.query(q, [data], (err, result)=>{
    //     if(err)
    //       throw err;
  //     // result is a array of tables
  //     console.log(result);
//     // console.log(result.length);
//     // console.log(result[0]);
//     // console.log(result[1]);
//   });
// }
// catch(err){
//   console.log(err);
// }
