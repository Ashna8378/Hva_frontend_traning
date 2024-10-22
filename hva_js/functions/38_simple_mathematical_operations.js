// Define callback function ----------------------------

function doubleNUmber(num){
    return num * 2
}

function squareNumber(num){
    return num * num
}

function incrementNumber(num){
     return num + 1
}

// Define performOperation Function:-------------------------

function performOperation(num, operation){
    return operation(num)
}

// Call performOperation with Callback Functions:----------------------

console.log(performOperation(5,doubleNUmber))
console.log(performOperation(3,squareNumber))
console.log(performOperation(7,incrementNumber))


