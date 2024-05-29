// Question 1
let input = document.createElement('input');
let main = document.querySelector('.main');
main.append(input);
let btn = document.createElement('button');
main.append(btn);
btn.innerText = "Click me!";

// Question 2
input.placeholder = "username";
btn.setAttribute('id', 'btnId');

// Question 3
btn.style.backgroundColor = "blue";
btn.style.color = "white";

// Question 4
let h1 = document.createElement('h1');
main.prepend(h1);
h1.innerText = "DOM Practice";
h1.style.textDecoration = "underline";
h1.style.color = "purple";

// Question 5
let para = document.createElement('p');
para.innerHTML = "Shadab Hasan Hakimi <b>Delta</b> Practice";
main.append(para);
