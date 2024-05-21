// OOPS: Object oriented programming

/* To structure our code:
1. Prototypes
2. New Operator
3. Constructors
4. Classes
5. Keywords (extends, super) */

// Either we can make 100's of student objects, but it will not be efficient. For writing code efficiently, we use OOPS concepts.++++++++
const stu1 = {
    name: "adab", 
    age: 25,
    marks: 89,
};
const stu2 = {
    name: "riya", 
    age: 21,
    marks: 96,
};
const stu3 = {
    name: "shadab", 
    age: 21,
    marks: 100,
};

// Object prototypes: Prototypes are the mechanism by which JavaScript objects inherit features from one another.
// It is like a single template object that all objects inherit methods and properties from without having their own copy.

// Every object in JS has a built-in property, which is called its prototype. Prototype is itself is an object, so the prototype will have its own prototype, making what's called a prototype chain.



// Factory Functions: A function theat creates objects
function PersonMaker(name, age){
    const person = {
        name: name,
        age: age,
        talk1(){
            console.log(`Hi, my name is ${this.name}`);
        },
    };
    return person;
}

let p1 = PersonMaker("shadab", 20);
let p2 = PersonMaker("adab", 18);
console.log(p1.talk1() === p2.talk1());

// Disadvantages of factory function:
// If we make two persons, i.e., p1 and p2 then each person will have different copy of its functions (like talk()), which is an inefficient way


// New Operator: The new operator lets developers create an instance of a user-defined object type or of one of the built-in object types that has a constructor function.
// Constructors - functions that generally doesn't return anythins & start with capital letter
function Person(name, age){
    this.name = name;
    this.age = age;
    // We are adding talk to prototype functions of Person
    Person.prototype.talk = function () {
        console.log(`Hi, my name is ${this.name}`);
    }
}

let p3 = new Person("adam", 25);
let p4 = new Person("eve", 25);
console.log(p3.talk() === p4.talk());


// Classes in Js: Classes are a template for creating objects
// The constructor method is a special mehod of a class for cerating and initializing an object instance of that class.
class PersonClass{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`Hi, my name is ${this.name}`);
    }
}

let p5 = new PersonClass("adam", 25);
let p6 = new PersonClass("eve", 25);
console.log(p5, p6);


// inheritance: allows us to create new classes on the basis of existing classes
// Syntax:
// class ChildClass extends ParentClass{}

