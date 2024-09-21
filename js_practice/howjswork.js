// How javascript works-----------------------------

// compilation
// code execution

// why compilation

// How javascript works


// What is global execution
// wha is local execution context
// closures


// console.log(this)
// console.log(window)
// console.log(firstName)
// var firstName = "Harshit"




// console.log(this)
// // console.log(window)
// console.log(myFunction)
// console.log(fullName)


// function myFunction(){
//     console.log("this is my function")
// }

// var firstName = "Harshit"
// var lastName = "Sharma"
// var fullName = firstName + " " + lastName

// console.log(fullName)

// Function Expression---------------------------------------------------

// console.log(myFunction)

// var myFunction = function(){
//     console.log("this is my function")
// }

// console.log(myFunction)


// console.log(myFunction)    // uncaught referenceerror : cannot access before initialization

// let myFunction = function(){
//     console.log("this is my function")
// }

// console.log(myFunction)


// console.log(firstname)   // // uncaught referenceerror : firstName is not defined


// console.log("Hello world")
// let firstName = "Harshit"
// let lastName = "Vashistha"

// const myFUnction = function(){
//     let var1 = "First Variable"
//     let var2 = "Second Variable"

//     console.log(var1)
//     console.log(var2)
// }


// Closures-------------------------------

// Function can return function

// function outerFunction(){
//     function innerFunction(){
//         console.log("hello world")
//     }
//     return innerFunction
// }
// const ans = outerFunction()

// ans()


// function printFullName(firstName, lastName){
//     function printName(){
//         console.log(firstName, lastName)
//     }
//     return printName
// }
// const ans = printFullName("harshit", "sharma")

// ans()








setTimeout(() => {
    fetch(`https://api.restful-api.dev/objects`)
        // .then(response => response.json()) // Parse the JSON from the response
        .then(data => console.log(data))    // Log the parsed data
        // .catch(error => console.error('Error:', error)); // Handle any errors
}, 2000);

