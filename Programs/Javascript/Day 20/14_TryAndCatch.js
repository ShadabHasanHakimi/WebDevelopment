// The try statement allows you to define a block of code to be tested for errors
// while it is being executed.

// The catch statement allows you to define a bolck of code to be executed, if an 
// error occurs in the try block.

// before: the lines after error will not be executed
// console.log("Hello");
// console.log("Hello");
// console.log(a);
// console.log("Hello");
// console.log("Hello");
// console.log("Hello");

// After: we will use try and catch
console.log("Hello");
console.log("Hello");
try{
    console.log(a);
}
catch{
    console.log("Error!");
}
console.log("Hello");
console.log("Hello");
console.log("Hello");

