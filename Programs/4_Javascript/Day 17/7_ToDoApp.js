let todo = [];

let req1 = prompt("Please enter your request: ");

while(true){
    if(req1 == "quit"){
        console.log("Quitting app");
        break;
    }
    
    if(req1 == "list"){
        console.log("---------------------------------------");
        for(let i=0; i<todo.length; i++){
            console.log(i, todo[i]);
        }
        console.log("---------------------------------------");
    }
    else if(req1 == "add"){
        let task = prompt("Please enter the task you want to add: ");
        todo.push(task);
        console.log("Task Added!");
    }
    else if(req1 == "delete"){
        let idx = prompt("Please enter the task index to be delete:");
        todo.splice(idx, 1);
        console.log("Task Deleted!");
    }
    else{
        console.log("Wrong Request!");
    }

    req1 = prompt("Please enter your request: ");
}