// Question: 1
let arr = [7,4,8,1,9,6,3];
console.log("Sum of square of arr:",arr.reduce((sum, el) => (sum+(el*el))));
console.log("Average of arr:",(arr.reduce((sum, el) => (sum+el)))/arr.length);

// Question: 2
console.log(arr.map((el) => (el+5)));

// Question: 3
let name = ["shadab", "hasan", "hakimi"];
console.log(name.map((el) => (el.toUpperCase())));

// Question: 4
function doubleAndReturnArgs(arr, ...args){
    return arr+args.map((el) => (2*el));
}
console.log(doubleAndReturnArgs(name,2,4,6));