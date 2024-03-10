// For arrow function, the scope (Lexical scope) is same as its parent, in short they see who have called their parent
// in normal function, they see who have called them, their scope depends on them

const student = {
    name: "shadab",
    marks: 95,
    age: 20,
    prop: this, //global scope
    getName: function(){
        console.log(this); 
        return this.name;
    },
    getMarks: ()=>{
        console.log(this); //parent's scope -> window
        return this.marks;
    }
};
console.log(student.getName());
console.log(student.getMarks());