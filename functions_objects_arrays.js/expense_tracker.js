// a. Define the Array of Expenses------------------------------------------------------

let expenses = [
    {id:1, name: "grocery", amount: 50, date:'2024-08-01'},
    {id:2, name: "rent", amount: 10, date:'2024-08-03'},
    {id:3, name: "utilities", amount: 30, date:'2024-08-05'},
    {id:4, name: "Internet", amount: 40, date:'2024-08-06'}

]

// b. Create the Expense Class-----------------------------

class Expense {
    constructor(id, name, amount, date){
        this.id = id
        this.name = name
        this.amount = amount
        this.date = date 
    }   
}

// c. Define the displayExpenses Function:

function displayExpenses(){

     expenses.forEach((expense)=>{
        console.log(`${expense.name} - ${expense.amount} (${expense.date})`)
     })
}

// displayExpenses()


// d. Define the addExpense Function----------------------------------------------

function addExpense(id, name, amount, date){
    const newExpense = new Expense(id, name, amount, date)
    expenses.push(newExpense)
}

addExpense(5, 'dairy', 400, '2024-08-09')

// displayExpenses()

// e. Define the updateExpense Function--------------------------------------------------------------

function updateExpense(id, newAmount){

    const expense = expenses.find((expense)=>{
        return expense.id === id
    })

    if(expense){
       expense.amount = newAmount
    }
    else{
        console.log(`Expenses wih the ${id} is not found`)
    }

}



updateExpense(11, 'electronics')
// displayExpenses()

// f. Define the removeExpense Function----------------------------------------------------

function removeExpense(id) {
    expenses = expenses.filter((expense) => expense.id !== id);
}

removeExpense(3)

displayExpenses()