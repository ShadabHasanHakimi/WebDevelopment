const num = prompt("Enter a number: ");
let random = Math.floor(Math.random()*num + 1);
let guess = prompt(`Guess the number between 1 and ${num}: `);
while(1){
    if(guess == "quit"){
        console.log("Game Quitted!");
        break;
    }
    if(guess == random){
        console.log("Great! You have guessed the number.");
        break;
    }
    else if(guess<random){
        guess = prompt("Your guessed number is small. Enter again: ");
    }
    else{
        guess = prompt("Your guessed number is large. Enter again: ");
    }
}