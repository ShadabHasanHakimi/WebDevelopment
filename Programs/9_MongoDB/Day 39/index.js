const mongoose = require("mongoose");

// mongoose.connect("mongodb://127.0.0.1:27017/test");

// 127.0.0.1 is the localhost which is written in place of 'localhost'
// 27017 is the by default port number of MongoDB
// test is the name of the db which we are trying to connect

main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});

// Models: Model in mongoose is a class with which we construct documents.
// model name ("User") and the name passed ("User") should be same and singular
const User = mongoose.model("User", userSchema);

const user2 = new User({
  name: "Adab",
  email: "adabhasanhakimi@gmail.com",
  age: 18
});

// for saving user1 in db
// save method returns a promise, therefore, we can use .then() and .catch()
user2.save()
.then(res => {
  console.log(res);
})
.catch((err) => {
  console.log(err);
})