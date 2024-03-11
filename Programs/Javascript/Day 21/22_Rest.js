// Rest: Allows a function to take an indefinite number of arguments and bundle them in an array
function sum(...args){
    for(let i=0; i<args.length; i++){
        console.log("you gave us: ", args[i]);
    }
}
console.log(sum(5));

// there is an inbuilt collection for storing arguments in JS, but it is not exactly array
function min(a,b,c,d){
    console.log(arguments);
}
min(1,2,3,4);