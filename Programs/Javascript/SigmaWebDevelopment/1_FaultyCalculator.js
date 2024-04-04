let prob = Math.random();
let a = prompt("Enter first number!");
let op = prompt("Enter operation you want to do (+, -, *, /, **):");
let b = prompt("Enter second number:");

if(prob<0.1){
    if(op == "+"){
        console.log(a-b);
    }
    else if(op == "-"){
        console.log(a/b);
    }
    else if(op == "*"){
        let sum = a+b;
        console.log((sum));
    }
    else if(op == "/"){
        console.log(a**b);
    }
    else if(op == "**"){
        console.log(a*b);
    }
    else{
        console.log("Invalid Operation!");
    }
}
else{
    if(op == "+"){
        let sum = a+b;
        console.log((sum));
    }
    else if(op == "-"){
        console.log(a-b);
    }
    else if(op == "*"){
        console.log(a*b);
    }
    else if(op == "/"){
        console.log(a/b);
    }
    else if(op == "**"){
        console.log(a**b);
    }
    else{
        console.log("Invalid Operation!");
    }
}