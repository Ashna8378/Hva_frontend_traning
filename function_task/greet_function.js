// 20 Greet function------------------

// a. Greet FUnction

// function greet(name){
//     console.log(`Hello, ${name}!`)
// }
// let person_name = prompt()
// greet(person_name)

// b. GreetDefault Function:

// function greetDefault(name = "Guest"){
//     return `Hello ${name}!`
// }
// const greeting = greetDefault()
// console.log(greeting)


// c. Rewrite Greet as a Function Expression:


// const greetFunction = function(name){
//     return `Hello ${name}!`
// }

// const person_name = prompt("Enter the name: ")
// console.log(greetFunction(person_name))


// d. Rewrite Greet as an Arrow Function:

// const greetArrow = (name)=>{
//     return `Hello ${name}!`
// }

// const person_name = prompt("Enter the name: ")
// console.log(greetArrow(person_name))


// 21. Calculate Area

//a. Calculate Area Function:

// function calculateArea(width, height){
//     return `Area is equal to ${width * height}`

// }
// const width = promt()
// const height = prompt()
// console.log(calculateArea(width,height))


// b. Modify Calculate Area Function with Default Values:


// function calculateArea(width = 10, height= 4){

//     return `Area is equal to ${width * height}`

// }
// console.log(calculateArea())


//c. Rewrite Calculate Area as a Function Expression:

// const calculateAreaFunction = function(width,height){
//       return `Area is equal to ${width * height}`
// }
// const width = prompt("Enter the width: ")
// const height = prompt("Enter the height: ")
// console.log(calculateAreaFunction(width,height))

// d. Rewrite Calculate Area as an Arrow Function:

// const calculateAreaArrow = ()=>{
//     return `Area is equal to ${width * height}`
// }
// const width = prompt("Enter the width: ")
// const height = prompt("Enter the height: ")
// console.log(calculateAreaArrow(width,height))


// 22. Higher order and callback function

// a.Define Higher Order Function:

// function higherOrderFunction(num,callback){
//     return callback(num)
// }

// function square(n){
//     return n * n 
// }

// const result = higherOrderFunction(4,square)
// console.log(result)


// b. Define Callback Function and Call Higher Order Function:

// function callbackFunction(n){
//     console.log(`The number is ${n}`)
// }

// function higherOrderFunction(num,callbackFunction){
//     return callbackFunction(num)
// }

// higherOrderFunction(5,callbackFunction)

// c. Call Higher Order Function with a Function Expression as Callback:


// function higherOrderFunction(num,callback){
//     return callback(num)
// }

// higherOrderFunction(10,function(n){
//     console.log(`THe number is ${n}`)
// })

// d. Callback to Log Square of the Number:


// function higherOrderFunction(num,callback){
//     return callback(num)
// }

// higherOrderFunction(4,function(n){
//     console.log(`square of number is ${n*n}`)
// })


// e. Callback to Log Sum of Two Numbers:

// function newHigherOrderFunction(num1,num2,callback){
//     return callback(num1,num2)

// }

// newHigherOrderFunction(3,7,function(n1,n2){
//       console.log(`The sum of two number is ${n1 + n2}`)
// })

// 23. Simple Mathematical Operations

// function doubleNumber(num){
//     return num * 2 
// }


// function squareNumber(num){
//     return num*num
// }


// function incrementNumber(num){
//     return num + 1
// }


// function performOperation(num,operation){
//     return operation(num)
// }

// console.log(performOperation(5,doubleNumber))
// console.log(performOperation(5,squareNumber))
// console.log(performOperation(5,incrementNumber))




// 24. Basic Arithmetic Operations

// a. Define Callback Functions:


// function addNumbers (num1,num2){
//      return `Sum of two numbers is ${num1 + num2}`
// }


// function multiplyNumbers (num1,num2){
//     return `Product of two numbers is ${num1 * num2}`
// }


// function subtractNumbers (num1,num2){
//     return `Difference of two numbers is ${num1 - num2}`
// }


// function divideNumbers (num1,num2){
//     return `Quotient of two numbers is ${num1/num2}`
// }

// function performArithmetic(num1,num2,operation){
//     return operation(num1,num2)
// }

// console.log(performArithmetic(5,3,addNumbers))
// console.log(performArithmetic(5,3,multiplyNumbers))
// console.log(performArithmetic(5,3,subtractNumbers))
// console.log(performArithmetic(5,3,divideNumbers))


