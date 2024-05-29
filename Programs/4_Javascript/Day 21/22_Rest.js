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

function sum(...args){
    return args.reduce((sum, el) => sum+el);
}
console.log(sum(12,32,28));

function max(...args){
    return args.reduce((m,el) => {
        if(m>el){
            return m;
        }
        else{
            return el;
        }
    });
}
console.log(max(7,3,8,11));