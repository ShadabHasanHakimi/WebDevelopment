const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("Connection Succesful!");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

// Schema Validations: Basically, rules for schema in mongoDB

// Method 1: when we only have one constraint
// const bookSchema = new mongoose.Schema({
//     title: String,
//     author: String,
//     price: Number,
// });

// Method 2: when we have multiple constraints
const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true, // this means title should not be empty
  },
  author: {
    type: String,
  },
  price: {
    type: Number,
  },
});

const Book = mongoose.model("Book", bookSchema);

// let book1 = new Book({
//     title: "Mathematics XII",
//     author: "RD Sharma",
//     Price: 800,
// });

// book1
//     .save()
//     .then((res) => {
//         console.log(res);
//     }).catch((err) => {
//         console.log(err);
//     });

// let book2 = new Book({
//   title: "How to kill a MockingBird",
//   author: "Harper Lee",
//   Price: "540", // we can send number in the form of string but string like "abc" cannot be sent
// })
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
