// Practice Question : 1
let arr = [1,2,3,4,5,6,2,3];
let num = 2;
for(let i=0; i<arr.length; i++){
    if(arr[i]==num){
        arr.splice(i, 1);
    }
}

console.log("Resultant Array: ",arr);

// Practice Question : 2 and 3
let num1 = 287152;
let sum=0;
let count=0;
while(num1!=0){
    sum = sum+(num1%10);
    count++;
    console.log(num1);
    num1=(num1-(num1%10))/10;
}

console.log("Number of digits in the number: ", count);
console.log("Sum of digits in the number: ", sum);

// Practice Question : 4
let n = 7;
let fact = 1;
for(let i=2; i<=7; i++){
    fact = fact*i;
}
console.log(`Factorial of ${n} = ${fact}.`);

// Practice Question : 5
let largest = 0;
let arr1 = [12,1,8,15,21,41,27,23];
for(let i=0; i<arr1.length; i++){
    if(arr1[i] > largest){
        largest = arr1[i];
    }
}
console.log("Largest number in the given array is: ", largest);