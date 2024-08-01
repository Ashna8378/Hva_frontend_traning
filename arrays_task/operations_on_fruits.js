// a. Define and Initialize the Array:

let fruits = ["Apple", "banana", "Cherry","date"]


//b. Iterate and Log Using forEach():---------------------------------------------------------------

// fruits.forEach(function(fruit){
//     console.log(fruit)
// })


// fruits.forEach((fruit)=>{
//     console.log(fruit)
// })

// c. Calculate Total Characters Using forEach():


// let totalCharacters = 0
// fruits.forEach(function(fruit){
//     totalCharacters += fruit.length
// })

// console.log(totalCharacters)


// d. Iterate and Create a New Modified Array Using map():-----------------------------------------------------------------

// const reversedFruits = fruits.map(function(fruit){
//         let reverse = ""
//         for(let i = fruit.length-1;i >= 0; i--){
//             reverse +=fruit[i]
//         }
//         return reverse
// })

// console.log(reversedFruits)


// const reversedFruits = fruits.map((fruit)=>{
//     let reverse = ""
//     for(let i = fruit.length - 1; i >= 0; i--){
//         reverse += fruit[i]
//     }
//     return reverse
// })


// console.log(reversedFruits)


// e. Iterate and Create a New Filtered Array Using filter():----------------------------------------------


// const longFruits = fruits.filter(function(fruit){
//         return (fruit.length > 5)
// })

// console.log(longFruits)



// const longFruits = fruits.filter(fruit=> fruit.length > 5)
// console.log(longFruits)


// f. Create a New Filtered and Modified Array using filter() and map():


// const fruitsWithA = fruits.filter(function(fruit){
//     return fruit.includes("a")
// })

// console.log(fruitsWithA)


// const aFruitsUpper = fruitsWithA.map(function(fruit){
//      return fruit.toUpperCase()
// })

// console.log(aFruitsUpper);