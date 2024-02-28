// question 1
let num = 10000;
if(num%10 == 0){
    console.log("good");
}
else{
    console.log("bad");
}

// question 2
// let name = prompt("Enter your name: ");
// let age = prompt("Enter your age");

// let output = `${name} is ${age} years old.`;
// alert(output);

// question 3
let quarter = 2;
switch(quarter){
    case 1: console.log("Jan, Feb, March");
        break;
    case 2: console.log("Apr, May, June");
        break;
    case 3: console.log("July, Aug, Sep");
        break;
    case 4: console.log("Oct, Nov, Dec");
        break;
}

// question 4
let string = "Adab";
if(string[0] == 'a' || string[0] == 'A'){
    console.log("It is a golden string!");
}
else{
    console.log("It is not a golden string!");
}

// question 5
let num1 = 10, num2 = 1, num3 = 18;
if(num1>num2){
    if(num1>num3){
        console.log(`${num1} is the largest number.`);
    }
    else{
        console.log(`${num3} is the largest number.`);
    }
}
else if(num2>num3){
    console.log(`${num2} is the largest number.`);
}
else{
    console.log(`${num3} is the largest number.`);
}

// question 5
let n1 = 32, n2 = 47852;
if(n1%10 == n2%10){
    console.log(`Last digit is same and the last digit is ${n1%10}.`);
}
else{
    console.log("Last digit is different!")
}
