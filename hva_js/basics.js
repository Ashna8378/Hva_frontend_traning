// javascript  - is a scripting lanugage 


// Var - we can redeclare and update the variable
// let - we can update the variable but not redeclare
// const - we can't redeclare and update the variable



// let box;          // defining a variable / declaration
// box = "ashna"     // assigning a value to a variable / initialization
// console.log(box)  // printing the value of a variable 

// // const name ; // give error 
// const name = "ashna"


// Rules for defining variables--------------------------

// Variable name must start with either a letter, an underscore or the dollar sign 
// variable names cannot start with numbers 
// javascript is case sensitive 
// keywords cannot be used as variable names 


// use strict - It helps us to follow javascript modern syntax and avoid older unsafe features

// x = "Ashna"
// console.log(x)


// Datatypes - defines the types of value a variable can hold 
// javascript is a dynamically typed language meaning that you don't need to explicitly define the type of a variable when uh declare it


// Types of datatype in js 

// Primitive 
// non primitive 

// 1. Primitive Datatype - that store a single value and are immutable

// number, string, boolean, null, undefined, symbol, bigint

// let age = 25;         // number
// let name = "Ashna";   // String
// let isStudent = true; // Boolean
// let notAssigned;      // undefined
// let result = null     // null
// let uniqueID = Symbol('id')    // Symbol
// let bigNumber = 1234567890123456789012345678901234567890n;   //BigInt


// let person = {name: "Ashna", age: 25}        // object
// let fruits = ["apple", "banana", "Cherry"]  // array

// Object - It is used to store multiple values in a single variable 
// key-value pair
// let item = {
//     "fruitName" : "apple",
//     "price" : 200,
//     "isAvailable" : true

// }

// accessing object properties

// dot notation
// square bracket notation

// console.log(item.fruitName)
// console.log(item.price)

// console.log(item["fruitName"])
// console.log(item["price"])

// adding and updating 

// item.city = "lucknow"
// item.price = 500
// console.log(item)

// deleting properties

// delete item.fruitName
// console.log(item)

// Arrays - It is also used to store multiple values in a single variable 
// index start with 0


// accessing and changing array elements 

// let fruit = ["apple", "banana", "cherry"]
// console.log(fruit[0]);
// fruit[1] = "guava"
// console.log(fruit)


// Opretors--------------------------------------------------------------------

// Operators are symbol that perform operations on values (known as operands)

// Arithmetic Operator
// Assignment Operator
// Increment/Decrement Operator
// Comparison Operator
// Logical Operator
// typeof Operator

// 1. Arithmetic Operator (+, -, *, /, %, **)

// let sum = 10 + 5
// let difference = 10 - 5
// let product = 10 * 5
// let quotient = 10 / 5
// let remainder = 10 % 3
// let power = 2 ** 3

// 2. Assignment Operator (=, +=, -=, *=, /=, %=, **)

// let x = 10
// x += 5      x = x + 5
// x -= 3      x = x - 3
// x *= 2      x = x*2
// x /= 6      x = x / 6
// x %= 3      x = x % 3
// x **= 2     x = x ** 2

// 3. Increment/decrement Operator

// These operators increase or decrease the value of a variable by 1.

// ++ (Increment): Increases the value of a variable by 1.

// Post-Increment = The current value is used then the variable is incremented

// let count = 5
// console.log(count++)
// console.log(count)

// Pre-Increment: The variable is incremented first, then the new value is used.

// console.log(++count);


// -- (Decrement): Decreases the value of a variable by 1.

// Post-Decrement: The current value is used, then the variable is decremented.

// let count = 5
// console.log(count--);
// console.log(count);

// Pre-Decrement: The variable is decremented first, then the new value is used.

// console.log(--count)

// Comparison Operator

// 4.Comparison Operator (==, ===, !=, !==, <, <=, >, >=) -----------------------------------

// These operators compare two values and return a Boolean (true or false) based on the comparison.

// console.log(5 == '5') // true
// console.log(5 == '5') // false
// console.log( 5 != '6') // true

// console.log(5 !== '5')  // true

// console.log(5 < 10) // true
// console.log(5 <= 5) // true
// console.log(10 > 5) // true
// console.log(5 >= 5) // true


// 5. Logical Operator (&&, ||, !)

// && (logical and)  - return true if both conditions are true

//      console.log(true && false) // false
//      console.log(5 > 1 && 10 < 20) // true
// // || (logical or) - returns true if at least one condition is true
    
//      console.log(true || false) // true

// // ! (logical not) - inverts the boolean value (true become false and false become true)

//     console.log(!true) // false
//     console.log(!(5 > 10)) // true

// 6 typeOf operator - The typeof operator is used to find the type of a variable or expression.

// console.log(typeof 42)  // number
// console.log(typeof "hello"); // string
// console.log(typeof true);    // boolean
// console.log(typeof undefined);   // undefined
// console.log(typeof null);        // object
// console.log(typeof {"name":"ashna"})
// console.log(typeof [1,2,3])



// Arrays -----------------------------------------------

// intro to arrays 
// reference type
//  how to create arrays
// Ordered collection of items


// let fruits = ["apple", "mango", "grapes"]
// let numbers = [1,2,3,4]
// let mixed = [1,2,3,4, "string", null, undefined]
// console.log(mixed)
// console.log(numbers)

// console.log(fruits[1])

// let fruits = ["apple", "mango", "grapes"]
// let obj = {}         // object literal
// console.log(fruits);

// fruits[1] = "banana"
// console.log(fruits);

// console.log(typeof fruits);
// console.log(typeof obj);

// console.log(Array.isArray(fruits))
// console.log(Array.isArray(obj))


// Array methods 
// push, pop, shift, unshift

// let fruits = ["apple", "mango", "grapes"]
// console.log(fruits)

// push --> 

// fruits.push("banana")
// console.log(fruits)

// pop -->

// let poppedFruit = fruits.pop()
// console.log(poppedFruit);

// fruits.pop()

// console.log(fruits);

// unshift---

// fruits.unshift("banana")
// fruits.unshift("myfruit")
// console.log(fruits);

// shift

// let removedFruit = fruits.shift()
// console.log(fruits)
// console.log("removed fruit is", removedFruit)

// primitive vs reference data types

// let num1 = 6
// let num2 = num1 
// console.log("valie is num1 is", num1)
// console.log("value is num2 is", num2);
// num1++
// console.log("after incrementing num1");
// console.log("value of num1 is", num1)
// console.log("value of num1 is", num2)


// refrence types

// array

// let array1 = ["item1", "item2"]
// let array2 = array1
// console.log("Array1",array1)
// console.log("array2",array2);

// array1.push("item3")

// console.log("after pushing element to array1");

// console.log("array1", array1);
// console.log("array2", array2);

// how to clone array

// let array1 = ["item1", "item2"]
// let array2 = ["item1", "item2"]
// array1.push("item3")
// console.log(array1 === array2)

// console.log(array1)

// console.log(array2);

// let arr = new Array(5); // Creates an array with 5 empty slots
// let arr2 = new Array(1, 2, 3); // Creates an array with values [1, 2, 3]
// console.log(arr);
// console.log(arr2);

// arr.push("Ashna")
// console.log(arr)

let arr = new Array(5);  // [ <5 empty items> ]
console.log(arr);        // [ <5 empty items> ]

// Updating the empty slots with values:
arr[0] = 'apple';
arr[1] = 'banana';
arr[2] = 'cherry';
arr[3] = 'banana';
arr[4] = 'cherry';


console.log(arr);        // ['apple', 'banana', 'cherry', <2 empty items>]
