// Question 5
function sumUptoN(n){
    let sum = 0;    // variable declared inside a function, cannot be accessed outside the function
    for(let i=1; i<=n; i++){
        sum = sum + i;
    }
    return sum;
}

console.log(sumUptoN(10));

// Question 6
let arr = ["Shadab", "Hasan", "Hakimi"];

function concatString(arr){
    let str = "";
    for(let i=0; i<arr.length; i++){
        str = str.concat(arr[i]);
    }
    return str;
}

console.log(concatString(arr));

{
    let sum; // this is block scope variable, it cannot be accessed outside the block
    // for eg variables declared in if-else statements or loops.
}

// depiction of lexical scope
function outerFunc(){
    let x = 5;
    let y = 6;
    function innerFunc(){
        // using x and y in nested function is termed as lexical scope
        console.log((x+y));
    }
    
    innerFunc();
}
outerFunc();

