
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
