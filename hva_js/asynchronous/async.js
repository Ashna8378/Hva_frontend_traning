// Javascript is a synchronous single-threaded language 
// single threaded means can only execute one command at a time in a specific order 


// asynchronous 

// Asynchronous js refers to the ability of js code to execute non-blocking operation 
// allowing other code to run simultaneously without waiting for the completion of asynchronous task 


// Everything in javascript happens inside an Global execution context 

// GLobal execution context is looks like a big box and it has two phases in it 

// 1. memory creation phase / variable environment (everything stored in key value pair/functions)  
// 2. Code execution phase / thread of execution


// What happens when we run a javascript program 

// when we run js code then execution context is created 

// var n = 2
// function square (num){
//     var ans = num * num 
//     return ans
// }

// var square2 = square(n)
// var square4 = square(4)

// Hoisting in javascript -----------------
// hoisting is a phenomenon in js by which you can access these variable and functions even before uh have initialized it 


// getName()
// console.log(x)
// console.log(getName)

// var x = 7 
// function getName(){
//     console.log("Nmaste Javascript")
// }

// getName()
// console.log(x)
// console.log(getName)

// hoisting works for only function declaration bcs in another function it treat as variabble 

// how function work in js ------------------------------------------------------

// var x = 1
// a()
// b()
// console.log(x)


// function a(){
//     var x = 10
//     console.log(x)
// }

// function b(){
//     var x = 100
//     console.log(x)
// }

// Shortest javascript program ---------------------------------------------------------

// window - is a global object which is created along with the global execution context 

// all javascript engines has it's responsibility to create global object 

// this === window  - true

// global space - any code we write in javascript which is not inside a function 

// var a = 10
// function b(){
//     var a = 10  // not in global space 
// }

// whenever we create any variable and function in global space the it get attached with the global object 

// console.log(window.a)
// console.log(a)          // assume it referring to the global space 

// console.log(this.a)

// Temporal dead zone is the time since when this let variable was hoisted and till it is initialized some value 

// console.log(a)  // it has allocated memory in separate memory not in global

// let a = 10

// var b = 10
// console.log(window.b)      // b is attached onto the window object 
// console.log(window.a)         // it won't be attached with window object even it stored in a separate space that is not the blobal space

// ReferenceError - when we tried to access a variable inside temporal dead zone then it's gives reference error 


// in global this is refer to window object 


// blocked scoped ---------------------------------------

// block is defined by curly braces 
// we use block so that we can combine multiple statements


var a = 100

{
    var a = 10;
    let b = 20
    const c = 30
    console.log(a)
    console.log(b)
    console.log(c)
}

console.log(a)

// console.log(a)
// console.log(b)
// console.log(c)









