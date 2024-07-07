const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const path = require("path");
const express = require("express");
const app = express();
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended: true}));

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

// Homepage route
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

app.get("/users", (req, res) =>{
  let q = "SELECT * FROM user";
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let users = result;
      // console.log(users);
      res.render("users.ejs", {users});
    });
  } catch (err) {
    console.log(err);
    res.send("some error in DB!");
  }
});

// edit route
app.get("/user/:id/edit", (req, res) =>{
  let {id} = req.params;
  let q = `SELECT * FROM user WHERE id='${id}'`
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      console.log(result[0]);
      let user = result[0];
      res.render("edit.ejs", {user});
    });
  } catch (err) {
    console.log(err);
    res.send("some error in DB!");
  }
});

// update route
app.patch("/user/:id", (req, res) => {
  let {id} = req.params;
  let {password: formPass, username: newUsername} = req.body;
  let q = `SELECT * FROM user WHERE id='${id}'`
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      // check password
      if(formPass != user.password){
        res.send("Wrong passoword!");
      }else{
        // update user credentials
        let q2 = `UPDATE user SET username='${newUsername}' WHERE id='${id}'`
        connection.query(q2, (err, result) => {
          if (err) throw err;
          res.redirect("http://localhost:8080/users");
        });
      }
    });
  } catch (err) {
    console.log(err);
    res.send("some error in DB!");
  }
});

app.get("/user/:id/delete", (req, res) => {
  let {id} = req.params;
  let q = `SELECT * FROM user WHERE id='${id}'`
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      console.log(result[0]);
      let user = result[0];
      res.render("delete.ejs", {user});
    });
  } catch (err) {
    console.log(err);
    res.send("some error in DB!");
  }
});

app.delete("/user/:id", (req, res) => {
  let {id} = req.params;
  let q = `SELECT * FROM user WHERE id='${id}'`;
  let {password: formPass} = req.body;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      // check password
      if(formPass != user.password){
        res.send("Wrong passoword or email!");
      }else{
        // update user credentials
        let q2 = `DELETE FROM user WHERE id='${id}'`
        connection.query(q2, (err, result) => {
          if (err) throw err;
          res.redirect("http://localhost:8080/users");
        });
      }
    });
  } catch (err) {
    console.log(err);
    res.send("some error in DB!");
  }
});

app.get("/user/add", (req, res) => {
  res.render("add.ejs");
});

app.post("/user/add/addUser", (req, res) => {
  let {username: newUsername, password: newPassword, email: newEmail} = req.body;
  let id=getRandomUser()[0];
  let q = `INSERT INTO user (id, username, email, password) VALUES ('${id}', '${newUsername}', '${newEmail}', '${newPassword}')`;
  
  console.log(id, newUsername, newEmail, newPassword);

  try{
    connection.query(q, (err, result)=> {
      if (err) throw err;
      res.redirect("http://localhost:8080/users");
    });
  }catch (err) {
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
