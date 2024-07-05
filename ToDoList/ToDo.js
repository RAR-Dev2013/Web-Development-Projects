//TO DO LIST//
//upload this to github
//Can we add functions?
//Clean up prompt message
//Add a try catch around delete
//clean up the comments
//start looking at designs for frontend

let counter = 0;

let toDoList = ["new"];

// While loop Include:
while(true) {
    // prompt
    let msg = prompt("Welcome to your todo list: new adds to arraylist. list shows all to do's in list. delete will delete a specific to do. quit will end the program");

    if (msg === "new") {
        let newToDo = prompt("Add your To Do list item.")
        // -User adds "new" 
//     *Add another prompt Array List
//     *Then user adds to do list
        // console.log("true");
        // counter++;
        // toDoList[counter] = newToDo;
        // console.log(toDoList);
       toDoList.push(newToDo); 

    } else if (msg === "list") {
        //Shows all to do's in list
        for (let toDo of toDoList) {
            console.log(toDo);
        }
       
    } else if (msg === "delete") {
        //removes specific todo from arraybased on text
        //prompt
        let deleteToDo = prompt("Enter the to-do item that you want deleted.")

        for (let toDo of toDoList) {
            console.log(toDo);
        }

        //find indexof
        let deletedItem = toDoList.indexOf(deleteToDo);
        console.log(deletedItem)

        //add indexof to splice
        const removed = toDoList.splice(deletedItem, 1);

        

        for (let toDo of toDoList) {
            console.log(toDo);
        }
        break;
    } else {
        console.log("quit");
        break;
    }
}



// -User adds "delete"
//     *removes specific todo from arraybased on text

// -User adds "quit"
//     *quits app