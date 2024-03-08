const student = {
    name: "Shadab",
    age: 20,
    maths: 95,
    science: 95,
    hindi: 97,
    getAvg(){
        let avg = (this.maths+this.science+this.hindi)/3;
        console.log(avg);
    }
};

student.getAvg(); // without 'this' it will give error because any function cannot access function parameters directly