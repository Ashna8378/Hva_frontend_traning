// Greet Function:

// a. Greet function

function greet(name){
    return "Hello " + name
}

console.log(greet("Ashna"))

// b. GreetDefault function

function greetDefault(name="Guest"){
    return "Hello " + name
}

console.log(greetDefault())

// c. Rewrite Greet as a Function Expression:


const greetFunction = function(name){
    return "Hello " + name
}

console.log(greetFunction("Ashna"))

// Rewrite Greet as an Arrow Function:

const greetArrow = (name)=>{
    return "Hello " + name
}

console.log(greetArrow("Ashna"))

