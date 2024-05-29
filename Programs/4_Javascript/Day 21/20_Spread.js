// Spread: Expands an iterable into multiple values
// Before
let arr = [2,4,2,5,6,1,9];
console.log(Math.min(arr[0], arr[1], arr[2], arr[3], arr[4], arr[5], arr[6]));

// After spread
console.log(Math.min(...arr));

// Another use case
console.log(arr);
console.log(...arr);

// Also can be used for copying arrays
let newArr = [...arr];

let newArr1 = [..."Hello"];
console.log(newArr1);

// We can also combine two arrays
let newArr2 = [...newArr1, ...newArr];
console.log(newArr2);

// We can also use spread for object literals like array literals
const data = {
    email: "shadabhasan786123@gmail.com",
    pass: "abcd",
};
let dataCopy = {...data, id: "123", country: "India",};
console.log(dataCopy);