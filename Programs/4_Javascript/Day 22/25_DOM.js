console.log(document.getElementById("header"));
console.dir(document.getElementById("header"));
let obj = document.getElementById("header");
// obj.innerText = "super man";

// similarly for selecting elements using class we can use 'getElementByClassName'
// it returns a collection not array

// for selecting elements using tag names : getElementByTag
console.dir(document.getElementsByTagName("h2"));


// Using Query selector : allows us to use any CSS selector
console.log(document.querySelector('p')); // selects first p element
console.log(document.querySelector("#header")); // select on the basis of id 
console.log(document.querySelector(".section")); // select on the basis of class (only first element with class name will be selected)
console.log(document.querySelectorAll(".section"));

// we can also use nesting
console.log(document.querySelector(".section h2"));

// Accessing properties
// innerText: shows the visible text contained in a node (does not shows hidden(display: none;) content)
// textContent: shows all the text(hidden also)
// innerHTML: shows text with markup

console.log("-_-*-_-*-_-*-_-*-_-*-_-*-_-*-_-*-_-*-_-*-_-*-_-*-_-*-_-*-_-");
console.log("innerHTML: ",obj.innerHTML);
console.log("-_-*-_-*-_-*-_-*-_-*-_-*-_-*-_-*-_-*-_-*-_-*-_-*-_-*-_-*-_-");
console.log("innerText: ",obj.innerText);
console.log("-_-*-_-*-_-*-_-*-_-*-_-*-_-*-_-*-_-*-_-*-_-*-_-*-_-*-_-*-_-");
console.log("textContent: ",obj.textContent);

// Manipulating attributes(id, class, etc) using methods

let h = document.querySelector('header');
console.log(h.getAttribute('id'));  // accessing the header's id
// changing the header's id
h.setAttribute('id', 'h');
console.log(h.getAttribute('id'));
console.dir(document.getElementById('h'));
h.style.backgroundColor = 'yellow';

// printing class list: all the classes in given id 
console.log(h.classList);
// adding a class
h.classList.add('shadab');
console.log(h.classList);
// removing a class
h.classList.remove('shadab');
console.log(h.classList);


// Navigation
let h2 = document.querySelector('h2');
console.log(h2.parentElement);
let sect = document.querySelector('section');
console.log(sect.children);
console.log(sect.childElementCount);

// creating new elements 
let newP = document.createElement('p');
console.dir(newP);
newP.innerText = "Hi! This is new paragraph!";
// inserting the new p into body
let body = document.querySelector('body');
body.appendChild(newP);
// using append to add new text into newP
newP.append(" This is new text!");

// adding an element at starting of an element
let newBtn = document.createElement('button');
newBtn.innerText = "Don't Click!"
sect.prepend(newBtn);

// creating new button
let btn = document.createElement('button');
btn.innerText = "click me!";
let article = document.querySelector('article');
article.appendChild(btn);

// insertAdjacentElement: adding a new element on our desired position
let btn2 = document.createElement('button');
btn2.innerText='beforebegin';
sect.nextElementSibling.insertAdjacentElement('beforebegin', btn2);
let btn3 = document.createElement('button');
btn3.innerText='afterbegin';
// the next sibling of sect will be btn2 after adding it, so one more nextElementSibling is added
sect.nextElementSibling.nextElementSibling.insertAdjacentElement('afterbegin', btn3);
// similarly there are beforeend and afterend


// removing elements
btn3.remove();
newP.remove();
