// 
// goal: create method to get incomplete task
//
// 1. Define getTasktodo method
// 2. use filter to return just the incomplete task(arrow function)
// 3. test your work by runing the script

const tasks = {
    tasks: [{
        text: 'Grocery Shopping',
        completed: true
    }, {
        text: 'Clean yard',
        completed: false
    }, {
        text : 'Film course',
        completed : false
    }],

    getTasksToDo () { // short hand arrow function syntax it is also known as ES6 method syntax  
        return this.tasks.filter((task) => task.completed === false)
    }
}

console.log(tasks.getTasksToDo())
