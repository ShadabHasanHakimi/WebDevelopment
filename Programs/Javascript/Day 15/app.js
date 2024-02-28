// console.log("shadab");
let a = 10;
let b = 5;
console.log("sum is : ", a+b);

// Template literals
let a1 = 15;
let a2 = 10;
console.log("The sum of ",a1 , " and ",a2 ," is: ",a1+a2);
// the above method is very complex, for simplifying it we can use template literals

let output = `the sum of ${a1} and ${a2} is ${a1+a2}`; // use back ticks
console.log(output);

console.log(`The multiplication of 4 and 5 is ${4*5}`);

// alerts and prompts

alert("Alert message!");
console.log("This is a console.log message");
// console.error("This is a console.error message");
// console.warning("This is a console.warning message");
let firstName = prompt("Enter your name: ");
console.log(firstName)
alert(firstName)
