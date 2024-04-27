let url = "https://catfact.ninja/fact";

// before axios

// let h2 = document.createElement("h2");
// async function catFacts(){
//     try{
//         let res = await fetch(url);
//         let data = await res.json();
//         console.log(data.fact);
//         h2.innerText = data.fact;
//     }
//     catch(e){
//         console.log("Error: ", e);
//     }
// }
// let body = document.querySelector("body");
// body.appendChild(h2);

// catFacts();

// after using axios

let btn = document.querySelector("button");
btn.addEventListener("click", async ()=>{
    let fact = await catFacts();
    let output = document.querySelector(".fact");
    output.innerText = fact;
});

async function catFacts() {
  try {
    let res = await axios.get(url);
    console.log(res);
    return res.data.fact;
  } catch (e) {
    console.log("Error: ", e);
    return "Error!";
  }
}

// Random Image of dogs

