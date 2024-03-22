let btns = document.querySelectorAll("button");
console.dir(btns);

// btn.onclick = function(){
//     alert("Hello!");
// };

// or

// function sayHello(){
//     alert("Hello! Button has been clicked!");
// }
// btn.onclick = sayHello;

for(btn of btns){
//     btn.onclick = ()=>alert("Hello!");
//     // btn.onclick = ()=>alert("Shadab Hasan");
//     btn.addEventListener("click", ()=>alert("button clicked"));
    btn.addEventListener("dblclick", ()=>alert("double click"));
    btn.onmouseenter = ()=>console.log("You entered a button!");
}

// we cannot perform two same events simultaneously, so we use event listeners

// Event listeners for element
let p = document.querySelector("p");
p.addEventListener("click", ()=> alert("you clicked the paragraph!"));

let div = document.querySelector("div");
div.addEventListener("mouseenter", ()=>div.style.backgroundColor="red");




