let form = document.querySelector("form");
form.addEventListener("submit", (event)=>{
    event.preventDefault();
    let inp = document.querySelectorAll("form input");
    console.dir(inp);
    for(inps of inp){
        console.log(inps.value);
    }

    // or

    console.log(form.elements[0].value);

    // activity
    let p = document.querySelector("p");
    let input1 = document.querySelector("#editor");
    input1.addEventListener("input", ()=>{
        console.log(input1.value);
        p.innerText = input1.value;
    })
});