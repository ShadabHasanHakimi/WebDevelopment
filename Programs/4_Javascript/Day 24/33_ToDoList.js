let btn1 = document.querySelector("#add");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn1.addEventListener("click", function () {
  let item = document.createElement("li");
  item.innerText = inp.value;

  let delBtn = document.createElement("button");
  delBtn.innerText = "delete";
  delBtn.classList.add("delete");

  item.appendChild(delBtn);
  ul.appendChild(item);
  inp.value = "";
});

// let delBtns = document.querySelectorAll(".delete");

// for(delBtn of delBtns){
//     delBtn.addEventListener("click", function(){
//         console.log("Deleted");
//         let par = delBtn.parentElement;
//         console.log(par);
//         par.remove();
//     });
// }

// Event Delegation: deleting child element using parent element
ul.addEventListener("click", function (event) {
  console.log(event.target.nodeName); // shows which element have triggered the event
  if (event.target.nodeName == "BUTTON") {
    event.target.parentElement.remove();
  }
});
