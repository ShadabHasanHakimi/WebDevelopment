// We can create array with different type of data 
let arr = ["shadab", 12, 23.5];
console.log(arr[0]);
// length of an array
console.log(arr.length);

// Note: Arrays are mutable : if changes are done then it will be done in the original array, no new array will be created

// Array Methods:
// Push: add to end, Unshift: add to start, Pop: delete from end & returns it, Shift: delete from start & returns it

arr.push("Hasan");
console.log(arr[arr.length-1]);
arr.unshift("first");
console.log(arr[0]);
arr.pop();
console.log(arr[arr.length-1])

console.log(arr);

console.log("Index of 12 is : ",arr.indexOf(12));

console.log("arr includes 11: ", arr.includes(11));
console.log("arr includes 23.5: ", arr.includes(23.5));

// concat : merges two arrays in one
let primary = ["abc", 123, 12.5];
let secondary = ["def", 786, 89.3];

console.log(primary.concat(secondary));

console.log("Reverse of arr: ",arr.reverse());

// returns last two elements of arr
console.log("Negative slice of arr: ", arr.slice(-2));

// Splice method: removes / replaces / add elements in place
// splice(start, deleteCount, item0 ... itemN)

let num = ["zeroeth", "first", "second", "third", "fourth", "fifth"];
console.log(num.splice(4)); // fourth and fifth will be deleted
console.log(num.splice(0,2)); // here elements in range from 0 to 2 will be deleted
console.log("num: ",num);
console.log(num.splice(0,0,"zeroeth", "first")); // no elements will be deleted and zeroeth and first will be added
console.log("num: ",num);

// note: sort method in arrays only works for char and string type arrays
// and can give wrong answer in the case of numbers
// because internally, numbers are converted into string and then sorted on
// the basis of ascii value.

// constant array
const arrConst = [1,2,3,4,5];
// we can change the values of arrConst but we cannot reassign arrConst new values like [1,2,3]
// or we cannot do arrConst = arr

// nested arrays or multi dimensional arrays
let arrNested = [[1, 2], ["shadab", "hasan", "hakimi"], ["adab", 12]];
console.log(arrNested);

console.log(arrNested[1][0]);












