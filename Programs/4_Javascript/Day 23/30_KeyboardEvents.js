let btn = document.querySelector("button");

btn.addEventListener("click", function(event){
    console.log("button clicked!");
})

let input = document.querySelector("input");
// input.addEventListener("keydown", ()=>console.log("Key was pressed"));
// input.addEventListener("keyup", ()=>console.log("Key was released"));

// we can also print key pressed and code of the key
input.addEventListener("keydown", (event)=>{
    if(event.code == "KeyS"){  //only if 's' is pressed
        console.log("S key is pressed!");
    }

    console.log("key = ",event.key);
    console.log("code = ",event.code);
    console.log("key was pressed!");
});

// form events
let form = document.querySelector("form");
form.addEventListener("submit", (event)=>{
    // we can prevent default events. Like directing to a new webpage after submitting the form
    event.preventDefault();
    alert("Form Submitted!");
});