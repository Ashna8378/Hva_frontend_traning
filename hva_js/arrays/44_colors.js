// Define and Log the colors Array:--------------------


let colors = ["red", "green", "blue"]
console.log(colors[0])  

// Modify and Add color elements:----------

// modify the second element

colors[1] = "yellow"
console.log(colors[1])


// add a new color to the end

colors.push("red")
console.log(colors[colors.length-1])

// Iterate using Loops over the colors Array:-------------------

// Using a for loop

for(let i = 0; i < colors.length; i++){
    console.log(colors[i])
}

// Using a while loop

let i = 0
while (i < colors.length){
    console.log(colors[i])
    i = i + 1
}

// Using a for ...of loop

for(let color of colors){
    console.log(color)
}

// Check Array Properties:------------------------------


console.log(typeof colors)
console.log(colors.length)

// Array Methods:----------------

// let colors = ["red", "green", "blue"]


// Add a new color to the end

colors.push("orange")
console.log(colors)

// Remove the last color

colors.pop()
console.log(colors)

// Find the index of "blue"

console.log(colors.indexOf("blue"))

// Add and Iterate Over Properties:------------------------------------

// let colors = ["red", "green", "blue"]

// add an "owner" property

colors.owner = "ashna"
console.log(colors)

for(let property in colors){
    console.log(`${property}: ${colors[property]}`)
}