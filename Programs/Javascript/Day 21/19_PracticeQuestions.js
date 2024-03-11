// Question 1: Check if all numbers in an array are multiples of 10 or not
let arr1 = [50, 30, 20, 100, 10, 90, 40];
let isMultiple = arr1.every((el) => (el%10==0));
console.log(isMultiple);

// Question 2: Create a function to find the min number in an array
let min = arr1.reduce((min, el) => {
    if(min<el){
        return min;
    }
    return el;
});
console.log(min);