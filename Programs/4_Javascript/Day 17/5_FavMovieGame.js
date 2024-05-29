console.log("Welcome to Favourite Movie game!");
console.log("Enter 'quit' to exit the game!");


let guess=prompt("Enter Movie name: ");
const favMovie = "avatar";

while((guess!=favMovie) && (guess!="quit")){
    guess = prompt("Wrong guess! try again: ");
}

if(guess == "quit"){
    console.log("You exited the game!");
    console.log(`Favourite movie was : ${favMovie}`);
}

