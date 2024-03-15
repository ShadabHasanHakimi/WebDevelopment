let arr = ["tony", "bruce", "natasha", "vision", "steve", "peter", "wanda"]
let [winner, runnerup, ...others] = arr;
console.log(winner, runnerup, others);

// Destructuring in objects
const student = {
    name: "shadab",
    age: 20,
    year: 3,
    branch: "Computer science",
    username: "shadab@123",
    password: "abcd"
}

// we can also use different name, for eg: username: user (now user is the new name for username)
let {name, username: user, ...other} = student;
console.log(name);
console.log(user);