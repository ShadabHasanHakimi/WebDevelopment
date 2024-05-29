// Question 1
let newP = document.createElement("p");
newP.innerText = "Hey I'm red!";
newP.style.color = "red";

let body = document.querySelector('body');
body.append(newP);

// Question 2
let h3 = document.createElement('h3');
h3.innerText = "I'm a blue h3!";
h3.style.color = "blue";

body.append(h3);

// Question 3
let div = document.createElement('div');
div.style.backgroundColor = "pink";
div.style.border = "2px solid black";

body.append(div);

let h1 = document.createElement('h1');
h1.innerText = "I'm in a div";

div.append(h1);

let p = document.createElement('p');
p.innerText = "ME TOO!";

div.append(p);
