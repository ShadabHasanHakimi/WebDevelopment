// forEach method
let arr = [1,2,3,4,5];
// let print = function print(el){
//     console.log(el);
// }
// arr.forEach(print); 
arr.forEach((el) => {
    console.log(el);
})

// map function: stores return value of the passed function to a new array
let newArr = arr.map((el) => {
    return el*2;
})
console.log(newArr);

// Filter function: creates new array according to the condition
let newArr1 = arr.filter((el) => (el>3));
console.log(newArr1);

let arr2 = [2,14,3,5,8,6,17,1,12,9];
let newArr2 = arr2.filter((el) => (el%2==0));
console.log(newArr2);

// Every function: returns true if every element satisfies the condition given. Else returns false
console.log(arr2.every((el) => (el%2!=0)));
console.log(arr2.every((el) => (el%2>=1)));

// reduce: reduces the array to a single value
// syntax: arr.reduce(reducer function with 2 variables for(accumulator, element));
let sum = arr.reduce((res, el) => (res+el)); // sums the values of the array
console.log(sum);
let mul = arr.reduce((res, el) => (res*el));
console.log(mul);

// finding maximum element of an array using reduce method
let max = arr2.reduce((max, el) => {
    if(max>el){
        return max;
    }
    else{
        return el;
    }
});
console.log(max);