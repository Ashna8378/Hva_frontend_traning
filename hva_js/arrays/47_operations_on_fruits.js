
// a. Define and Initialize the Array:------------------

let fruits = ["apple", "banana", "cherry", "date"]

// b.  Iterate and Log Using forEach():--------------------------

// using function expression

fruits.forEach(function(fruit){
    console.log(fruit.toUpperCase())
})

// using arrow function 

fruits.forEach((fruit)=>{
    console.log(fruit.toUpperCase())
})

// c. Calculate Total Characters Using forEach():-------------------------------

// let fruits = ["apple", "banana", "cherry", "date"]
let totalCharacters = 0

fruits.forEach(function(fruit){
     totalCharacters += fruit.length  

})

console.log(totalCharacters)

// d. Iterate and Create a New Modified Array Using map():------------------------------

// let fruits = ["apple", "banana", "cherry", "date"]

let reversedFruits = fruits.map(function(fruit){
         return fruit.split('').reverse().join('')
})
console.log(reversedFruits)


let reversedFruits = fruits.map((fruit)=>{
    return fruit.split('').reverse().join('')
})
console.log(reversedFruits)


// e. Iterate and Create a New Filtered Array Using filter():--------------------

// let fruits = ["apple", "banana", "cherry", "date"]

// with function expression -----

let longFruits = fruits.filter(function(fruit){
    return fruit.length > 5
})

console.log(longFruits)

// with arrow function------


let longFruits = fruits.filter(function(fruit){
    return fruit.length > 5
})

// console.log(longFruits)


// f. Create a New Filtered and Modified Array using filter() and map():

// let fruits = ["apple", "banana", "cherry", "date"]

let aFruitsUpper = fruits.filter(function(fruit){
    return fruit.includes("a")
}).map(function(fruit){
    return fruit.toUpperCase()
})

console.log(aFruitsUpper)



