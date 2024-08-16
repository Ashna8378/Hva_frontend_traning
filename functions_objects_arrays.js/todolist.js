// a. Define the Array of Tasks-------------------------------------------------------------------------------

const tasks = [
    {id:1, description: 'complete math homework', dueDate: "2024-08-10", status: 'incomplete'},
    {id:2, description: 'complete hindi work', dueDate: "2024-09-10",status: 'complete'},
    {id:3, description: 'complete science work', dueDate: "2024-10-10", status: 'incomplete'},

]

// b. Create the Task Class---------------------------------------------------------

class Task{
    constructor(id, description,dueDate, status,){
    this.id = id,
    this.description = description,
    this.dueDate = dueDate,
    this.status = status
    }
}

// c. Define the displayTasks Function-----------------------------------------------------


function displayTasks(){
    tasks.forEach((task)=>{
        console.log(`${task.description} - ${task.dueDate} (${task.status})`)
    })
}

displayTasks()


// d. Define the addTask Function---------------------------------------------

function updateTask(id, description, dueDate, status){
    
    const newTask = new Task(id, description, dueDate, status)
    tasks.push(newTask)
}

updateTask(5, 'hathim', '2024-08-4', 'complete')

// displayTasks()

// e. Define the updateTask Function-------------------------------------------------------------------------


function updateTask(id, newStatus){
    
    const task = tasks.find((task)=>{
        return task.id === id
    })
    if(task){
        task.status = newStatus
    }

}

updateTask(3,'complete')
displayTasks()