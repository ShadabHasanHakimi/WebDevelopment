// let n=5;
// for(let i = 0; i<=n; i++){
//     console.log("Hello!", i);
// }
// prompt("Enter your name!");

// console.log(process.argv); 

// We can store value of argument passed into an array and perform operations
let args = process.argv;
for(let i = 2; i<args.length; i++){
    console.log("Hello ", args[i]);
}