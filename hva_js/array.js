// intro to arrays
// reference type
// how to create arrays 

// ordered collection of item

// let fruits = ['apple', "mango", "grapes"]
// let numbers = [1,2,3,4]
// let mixed = [1,2,3,4, "string", null, undefined]
// console.log(mixed);
// console.log(numbers);
// console.log(fruits)
// console.log(fruits[0]);


// let fruits = ['apple', "mango", "grapes"]
// let obj = {}  // object literal
// console.log(fruits);
// fruits[1] = "banana"
// console.log(fruits)

// console.log(typeof fruits)    // objects

// console.log(Array.isArray(fruits))
// console.log(Array.isArray(obj))

// array push pop 
// array shift unshift

// let fruits = ['apple', "mango", "grapes"]

// console.log(fruits);

// push 

// fruits.push("banana")
// console.log(fruits);

// pop   // remove element from end and return that removed element

// let removedElement = fruits.pop()
// console.log(removedElement);

// console.log(fruits)


// unshift

// fruits.unshift("banana")
// fruits.unshift("myfruit")
// console.log(fruits);

// shift

// let removedFruit = fruits.shift()
// console.log(fruits)
// console.log("removed fruit is", removedFruit)

// Primitive vs refrence  data types

// let num1 = 6
// let num2 = num1
// console.log("value of num1 is", num1)
// console.log("value of num2 is", num2)
// num1++

// console.log("after incrementing num1")
// console.log("value of num1 is", num1)
// console.log("value of num2 is", num2)


// refrence types
// array

// let array1 = ["item1", "item2"]
// let array2 = array1

// console.log("array1", array1)
// console.log("array2", array2)
// array1.push("item3")
// console.log("after pushing element to array 1");

// console.log("array1", array1)
// console.log("array2", array2)

// how to clone array

// let array1 = ["item1", "item2"]
// let array2 = array1

// console.log(array1 === array2)  // true

// let array1 = ["item1", "item2"]
// let array2 = ["item1", "item2"]
// let array2 = array1.slice(0).concat(["item3", "item4"])
// let array2 = [].concat(array1, ["item3", "item4"])

// new way 
// spread operator
// let oneMoreArray = ["item5", "item6"]
// let array2 = [...array1,"item3", "item4", ...oneMoreArray]


// array1.push("item3")

// console.log(array1 === array2)
// console.log(array1)
// console.log(array2);


// for loop in array 

// let fruits = ["apple", "mango", "grapes", "banana"]

// for(let i = 0; i<=9; i++){
//     console.log(i)
// }

// console.log(fruits.length)
// console.log(fruits[fruits.length - 1])

// let fruits2 = []
// for (let i = 0; i < fruits.length; i++){
//     console.log(fruits[i].toUpperCase())
//     fruits2.push(fruits[i].toUpperCase())
// }

// console.log(fruits2)

// use const for creating array

// const fruits = ["apple", "mango"]
// fruits.push("grapes")
// console.log(fruits);

// while loop in array 

// let fruits = ["apple", "mango", "grapes", "banana"]

// let i = 0
// while (i<fruits.length){
//     console.log(fruits[i])
//     i++
// }

// for of loop in array 

// let fruits = ["apple", "mango", "grapes", "banana"]

// let fruits2 = []
// for (let fruit of fruits){
//     console.log(fruit.toUpperCase());
//     fruits2.push(fruit.toUpperCase());

// }
// console.log(fruits2)

// for in loop in array

// let fruits = ["apple", "mango", "grapes", "banana"]

// const fruits2 = []
// for(let index in fruits){
//     console.log(fruits[index]);
//     fruits2.push(fruits[index].toUpperCase())
// }

// console.log(fruits2)


// array destructuring 

// const myArray = ["value1", "value2", "value3", "value4"]
// let myvar1 = myArray[0]
// let myvar2 = myArray[1]
// console.log("value of myvar1", myvar1);
// console.log("value of myvar2", myvar2);

// let [myvar1, myvar2,...myNewArray ] = myArray

// console.log("value of myvar1", myvar1);
// console.log("value of myvar2", myvar2);
// console.log(myNewArray);


// important array methods -------------------------

const numbers = [4,2,5,8]

function multiplyBy2(number,index){
    console.log("index is ", index)
    console.log(number*2)
}
multiplyBy2(numbers[0],0)

