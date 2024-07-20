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

// const user2 = new User({
//   name: "Adab",
//   email: "adabhasanhakimi@gmail.com",
//   age: 18
// });

// for saving user1 in db
// save method returns a promise, therefore, we can use .then() and .catch()
// user2.save()
// .then(res => {
//   console.log(res);
// })
// .catch((err) => {
//   console.log(err);
// })

// Inserting many users at a time
// User.insertMany([
//   {name: "tony", email: "tonystart_3000@gmail.com", age: 50},
//   {name: "bruce", email: "greengammahulk@yahoo.com", age: 48},
//   {name: "peter", email: "spidy@gmail.com", age: 26}
// ]).then((res) => {
//   console.log(res);
// });


// Operation Buffering: Mongoose lets you start using your models immediately, without waiting for mongoose to establish a connection to mongoDB

// Find in mongoose: Model.find() are not promises, but they have .then() method
// User.find({}).then(res => {
//   console.log(res);
// })
// .catch((err) => {
//   console.log(err);
// });

// User.find({age: {$gt: 40}}).then(res => {
//   console.log(res);
// })
// .catch((err) => {
//   console.log(err);
// });

// updating a collection in a db

// User.updateOne({id: "6695edc34ed7fd60f8a51865"}, {email: "hulk@gmail.com"})
// .then((res) => {
//   console.log(res);
// }).catch((err) => {
//   console.log(err);
// });

// User.updateMany({name: "tony"}, {age: 49})
// .then((res) => {
//   console.log(res);
// }).catch((err) => {
//   console.log(err);
// })

// User.find({age: {$gt: 40}}).then(res => {
//   console.log(res);
// })
// .catch((err) => {
//   console.log(err);
// });

// updateOne() and updateMany() gives unuseful info, for getting info about updated value, we can use the method below:
// User.findOneAndUpdate({id: "6695edc34ed7fd60f8a51865"}, {age: 49})
// .then((res) => {
//   console.log(res);
// }).catch((err) => {
//   console.log(err);
// });

// By default findOneAndUpdate() method first finds and then update so we will ge old data, for changing this behaviour we can use its options
// User.findOneAndUpdate({id: "6695ee93ad7a9f184b4006a3"}, {age: 19})
// .then((res) => {
//   console.log(res);
// }).catch((err) => {
//   console.log(err);
// });

// User.find().then((res) => {
//   console.log(res);
// }).catch((err) => {
//   console.log(err);
// });


// Delete method in mongoose: deleteOne() and deleteMany()
// User.deleteOne({name: "bruce"}).then((res) => {
//   console.log(res);
// }).catch((err) => {
//   console.log(err);
// });

// User.find().then((res) => {
//   console.log(res);
// }).catch((err) =>{
//   console.log(err);
// });

// returns the value that is deleted
User.findByIdAndDelete("6695ed3c24b4e532d2bdd0e2").then((res) => {
  console.log(res);
}).catch((err) => {
  console.log(err);
});