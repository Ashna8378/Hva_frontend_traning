// a. Define Higher Order Function ------------------

function higherOrderFunction(num,callback){
    callback(num)
}


// b. Define Callback Function and Call Higher Order Function:

function callbackFunction(number){
    console.log(number)
}


higherOrderFunction(5,callbackFunction)

// c. Call Higher Order Function with a Function Expression as Callback:


higherOrderFunction(10,function(number){
    console.log(number)
})

// d. Callback to Log Square of the Number: --------------------------------------------------------


higherOrderFunction(4,function(number){
    console.log(number*number)
})

// e. Callback to Log Sum of Two Numbers:----------------------

function newHigherOrderFunction(num1,num2,callback){
     callback(num1,num2)
}

newHigherOrderFunction(3,7,function(num1,num2){
    console.log(num1 + num2)
})





