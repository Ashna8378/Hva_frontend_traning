
// a Define and Initialize the Array:-------------------------

// let temperatures = [-3, 14, 22, 5, -10]

// b. Iterate and Log Using forEach():-------------------------------

// temperatures.forEach(function(temp){
//     console.log(temp)
// })


// temperatures.forEach((temp)=>{
//     console.log(temp)
// })

// temperatures.forEach(function(temperature){
//     console.log((temperature * 9/5) + 32)
// })

// temperatures.forEach((temperature)=>{
//     console.log((temperature * 9/5) + 32)
// })


// c. Iterate and Create a New Modified Array Using map():-----------------------

// let temperatures = [-3, 14, 22, 5, -10]

// using map with function expression

// let  temperaturesInFahrenheit = temperatures.map(function(temperature){
//       return (temperature * 9/5) + 32
// })

// console.log(temperaturesInFahrenheit)

// using map with arrow function

// let  temperaturesInFahrenheit = temperatures.map((temperature)=>{
//     return (temperature * 9/5) + 32
// })

// console.log(temperaturesInFahrenheit)

// d. Iterate and Create a New Filtered Array Using filter():

// let temperatures = [-3, 14, 22, 5, -10]

// using function with function expression

// let belowFreezing = temperatures.filter(function(temperature){
//     return temperature < 0
// })

// console.log(belowFreezing)

// using filter with arrow function 

// let belowFreezing = temperatures.filter((temperature)=>{
//     return temperature < 0
// })

// console.log(belowFreezing)