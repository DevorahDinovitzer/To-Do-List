// 'new' = Adds to the to do list
// 'list' = lists the to do list WITH index numbers
// 'delete' = remove a specific item on the to do list by index number
// 'quit' = quit the app


const toDo = ['Renew rifle license', 'Clean the Streimel'];
console.log(toDo);

// Requesting input from the user
let command = prompt('What would you like to do');



while (command !== 'quit' && command !== 'q') {
    if (command === 'new') {
        let newToDo = prompt('Great. What would you like to add?');
        toDo.push(newToDo);
        console.log(toDo)

    } else if (command === 'list') {
        console.log('***************')
        for (let i = 0; i < toDo.length; i++) {
            console.log(`${i}: ${toDo[i]}`)
        }
        console.log('***************')

    } else if (command === 'delete') {
        let deleteToDo = parseInt(prompt('Which item would you like to delete. Please use index number'));
        toDo.splice(deleteToDo, 1);
    }
    else {
        command = prompt('Asking Again- What would you like to do')

    }
    command = prompt('What would you like to do')
}
console.log('OK. You Quit the App');