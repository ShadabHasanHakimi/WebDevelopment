const student = {
    name: "Shadab",
    age: 23,
    marks: 89.4,
    colors: ["blue", "black"]
};

// How to access keys of an object
// There are two ways
console.log(student["name"]);
console.log(student.colors);

// We can use reserved values inside a object
const obj = {
    1: "a",
    2: "b",
    null: "c",
    true: "d",
    let: "e"
};

console.log(obj[null]);
console.log(obj);

// How to update/change or add new property in a object literal
student.marks = 'A'; // we can also store string in place of integer
console.log(student);
student.gender = "male";
console.log(student);

// how to delete a property
delete student.age;
console.log(student);

// object of objects
const classInfo = {
    shadab: {
        age: 20,
        grade: "A+"
    },
    adab: {
        age: 18,
        grade: 'B'
    },
    farhan: {
        age: 15,
        grade: 'C'
    }
};

console.log(classInfo);
console.log(classInfo.shadab);
console.log(classInfo.adab.age);
classInfo.farhan.grade = "C+";

// Array of objects
const classInfoArray = [
    {
        name: "Shadab",
        age: 20,
        grade: "A+"
    },
    {
        name: "adab",
        age: 18,
        grade: 'B'
    },
    {
        name: "farhan",
        age: 15,
        grade: 'C'
    }
];

console.log(classInfoArray);
console.log(classInfoArray[1].name);

// Math object: It stores the values for mathematical properties like pi, sqrt(2), sin0, cos0, etc.
console.log(Math);

// useful methods in Math object
console.log(Math.abs(-12));
console.log(Math.pow(2,3));
console.log(Math.floor(2.78));
console.log(Math.floor(-5.1));
console.log(Math.ceil(2.3));
console.log(Math.ceil(-7.89));
console.log(Math.random()); // gives a random value between 0-1 but 1 is not included

console.log("------------------------------------------------------");

// How to generate random integers
// From 1 to 10
let num = Math.random();
num = Math.floor(num*10); // multiply by the number upto which we want the number to be generated
num = num+1; // for including last number and removing 0 (changing range from 0-9 to 1-10)
console.log(num);

let num1 = Math.floor(Math.random()*100 + 1);
console.log(num1);

// for range 20 to 25
let num2 = Math.floor(Math.random()*5 + 21);
console.log(num2);