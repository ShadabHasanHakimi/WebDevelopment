// Question 1
let div = document.querySelector("div");
div.addEventListener("mouseout", ()=>console.log("mouseout"));
div.addEventListener("scroll", ()=>console.log("scroll"));
div.addEventListener("load", ()=>console.log("load"));

// Question 2
let btn = document.querySelector("button");
btn.addEventListener("click", ()=>{
    btn.style.backgroundColor = "green";
    btn.style.color = "white";
    btn.innerText = "clicked"
});

// Question 3
let regex = /^[a-zA-Z]+$/;
let inp = document.querySelector("input");