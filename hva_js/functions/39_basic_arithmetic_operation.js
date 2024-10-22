
// a. Define Callback Functions:

function addNumbers(num1,num2){
    return num1 + num2
}

function multiplyNumbers(num1,num2){
    return num1*num2
}


function subtractNumbers(num1,num2){
    return num1 - num2
}


function divideNumbers(num1,num2){
    return num1 / num2
}


// Define performArithmetic Function:-------------------

function performArithmetic(num1,num2,callback){
    return callback(num1,num2)
}

console.log(performArithmetic(5,3,addNumbers))
console.log(performArithmetic(5,3,multiplyNumbers))
console.log(performArithmetic(5,3,subtractNumbers))
console.log(performArithmetic(5,3,divideNumbers))


