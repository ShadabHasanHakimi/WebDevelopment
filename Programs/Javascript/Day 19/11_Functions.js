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
