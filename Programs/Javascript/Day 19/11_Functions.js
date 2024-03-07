function printHello(){
    console.log("Hello!");
}
printHello();

function isAdult(){
    let age = 17;
    if(age>=18){
        console.log("Adult");
    }
    else{
        console.log("Not Adult");
    }
}
isAdult();

function rollDice(){
    let num = Math.floor(Math.random()*6 +1);
    console.log(num);
}
rollDice();
rollDice();
rollDice();
rollDice();

// function with arguments
function printName(name, age){
    console.log(`Name: ${name}, age: ${age}`);
}
printName("Shadab", 20);
printName("Adab"); // If we pass only one value

// Function expressions: we can store a function value in a variable
let sum = function(a, b){
    console.log((a+b));
}
console.log(sum(1,2));

// High order function: High order function does one or both of the below:
// -takes one or multiple functions as arguments
// -returns a function