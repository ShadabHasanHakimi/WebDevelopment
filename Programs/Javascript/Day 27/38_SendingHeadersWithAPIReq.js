let url = "https://icanhazdadjoke.com/";

let p = document.querySelector(".joke");

async function getJokes(){
    try{
        const config = {headers: {Accept: "application/json"}};
        let res = await axios.get(url, config);
        console.log(res.data.joke);
    }
    catch(e){
        console.log("Error: ", e);
    }
}