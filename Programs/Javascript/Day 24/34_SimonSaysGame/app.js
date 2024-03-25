let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

let btns = ["yellow", "red", "purple", "green"];

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(event){
    if(started == false){
        console.log("Game started!");
        started = true;  
        
        levelUp();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 200);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 200);
}

function levelUp(){
    userSeq = [];
    level++;

    h2.innerText = `Level ${level}`;

    // random btn choose
    let randIdx = Math.floor(Math.random()*4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    console.log(gameSeq);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    btnFlash(randBtn);
}

function checkAns(idx){
    if(userSeq[idx] == gameSeq[idx]){
        // console.log("same value");
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp(), 1000);
        }
    }
    else{
        h2.innerText = `Game over! Press any key to start`;  
        reset();
    }
}

function btnPress(){
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}