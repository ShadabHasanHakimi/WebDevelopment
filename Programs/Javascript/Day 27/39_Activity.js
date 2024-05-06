let url = "http://universities.hipolabs.com/search?name=";

let btn = document.querySelector("button");
btn.addEventListener("click", async ()=>{
    let country = document.querySelector("input").value.toLowerCase();
    let univ = await getUniv(country);

    show(univ);
});

let ul = document.querySelector(".list")

function show(univ){
    ul.innerText = "";
    for(u of univ){
        console.log(u);
        let li = document.createElement("li");
        li.innerText = u.name;
        ul.append(li);
    }
}

async function getUniv(country){
    try{
        let res = await axios.get(url+country);
        return res.data;
    }
    catch(err){
        console.log(err);
    }
}