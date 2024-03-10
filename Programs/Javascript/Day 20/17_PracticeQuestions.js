// Question 1
let avg = (arr) => {
    let sum=0;
    for(let i=0; i<arr.length; i++){
        sum = sum + arr[i];
    }
    return (sum/arr.length);
}
console.log(avg([1,3,5,7]));


// Question 2
let isEven = (num) => {
    if(num%2 == 0){
        return true;
    }
    else{
        return false;
    }
}
console.log(isEven(8));