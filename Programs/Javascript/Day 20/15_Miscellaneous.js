// Arrow functions
// const func = (arg1, arg2) => {/*Function Definition*/}
const sum = (a,b) => {
    console.log(a+b);
}

// if there is only one argument
const cube = n => {     // but we cannot remove '()' completely 
    console.log(n*n*n);
}

// Implicit return in arrow function: if a arrow function only returns a
// value and does not perform any operation
// const func = (arg1, arg2) => (value);
const mul = (a, b) => (     // don't use curly braces
    a*b
);

// setTimeout Function: it will execute the given function after specified time
// It will not stop the whole program, instead lines after setTimeout function
// will be executed normally and after the specified time the given function
// will be executed

// Takes time in milliseconds : 1sec = 1000ms
// setTimeout(function, timeout) 
console.log("Shadab");
setTimeout(() => {
    console.log("Hasan");
}, 4000);
console.log("Hakimi");


// setInterval(function, interval): unlike setTimeout, it executes again and
// again after the interval
let id1 = setInterval(() => {
    console.log("Shadab Hasan Hakimi");
}, 2000);

// for stopping setInterval function, we can call clearInterval(id1) in the console