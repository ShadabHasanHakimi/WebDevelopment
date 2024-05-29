let url = "https://catfact.ninja/fact";

// fetch(url)
// .then((res) => {
//     console.log(res);
//     return res.json()
// })
// .then((data) => {
//     console.log("Fact about cats : ",data.fact);
// })
// .catch((err) => {
//     console.log("ERROR - ", err);
// });

let h2 = document.createElement("h2");


async function catFacts() {
  try {
    let res = await fetch(url);
    let data = await res.json();
    // console.log(data.fact);
    h2.innerText = data.fact;
  } catch (e) {
    console.log("Error: ", e);
  }
}

let body = document.querySelector("body");
body.appendChild(h2);

console.log(catFacts());


