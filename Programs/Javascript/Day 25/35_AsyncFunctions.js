// Async functions are functions which by default returns promise
async function greet(){
    throw "404 page not found";
    return "hello!";
}

// call greet() in console
// if async function is run without an error then promise will be returned with "rejected" state
// otherwise state will be "fullfilled" with it's returned value as result

greet()
.then(() => {
    console.log("promise fulfilled!");
})
.catch((err) => {
    console.log("promise not fulfilled with err: ", err);
})

// we can also make arrow functions async
let demo = async () => {
    return "Shadab";
}
// call demo() in console