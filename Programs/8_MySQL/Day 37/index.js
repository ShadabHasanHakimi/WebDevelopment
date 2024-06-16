const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");

// below we are creating connection to my sql workbench
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: '@shadab786'
});

// we can pass queries using a variable
let q = "INSERT INTO user (id, username, email, password) VALUES ?";

// inserting data in bulk using faker

// faker creates new data when called
let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.userName(),
    faker.internet.email(),
    faker.internet.password()
  ];
};

let data = [];
for(let i = 0; i<100; i++){
  data.push(getRandomUser());
}

try{
  connection.query(q, [data], (err, result)=>{
    if(err) 
      throw err;
    // result is a array of tables
    console.log(result);
    // console.log(result.length);
    // console.log(result[0]);
    // console.log(result[1]);
  });
}
catch(err){
  console.log(err);
}

connection.end();
