const sum = (a, b) => a+b;
const mul = (a, b) => a*b;
const g = 9.8;
const Pi = 3.14;

// module.exports: a special object that include data to be exported to other files
// module.exports = 123;

let obj = {
    sum: sum,
    mul: mul,
    g: g,
    Pi: Pi
};

module.exports = obj;
