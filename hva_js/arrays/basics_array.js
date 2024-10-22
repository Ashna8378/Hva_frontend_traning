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


// const numbers = [4,2,5,8]

// function myFunc(number, index){
//       console.log(`index is ${index} number is ${number}`)
// }

// for(let i = 0; i < numbers.length; i++){
//     myFunc(numbers[i],i)
// }

// numbers.forEach(myFunc)

// numbers.forEach(function(number,index){
//     console.log(`index is ${index} number is ${number}`)

// });

// numbers.forEach(function(number,index){
//      console.log(number * 2, index)
// })

// const users = [
//     {firstName: "harshit", age: 23},
//     {firstName: "mohit",   age: 21},
//     {firstName: "nitish",   age: 22},
//     {firstName: "garima",   age: 20}

// ]

// users.forEach(function(user){
//     console.log(user.firstName)
// })

// users.forEach((user)=>{
//     console.log(user.firstName)
// })

// for(let user of users){
//     console.log(user.firstName)
// }

// map method -------------------------

// const numbers = [3,4,6,1,8]

// const square = function(number){
//       return number * number 
// }
// const squareNumber = numbers.map(square)

// console.log(squareNumber)

// const squareNumber = numbers.map((number)=>{
//     return number*number
// })

// console.log(squareNumber)

// const users = [
//     {firstName: "harshit", age: 23},
//     {firstName: "mohit",   age: 21},
//     {firstName: "nitish",   age: 22},
//     {firstName: "garima",   age: 20}

// ]

// const userNames = users.map((user)=>{
//     return user.firstName
// })

// console.log(userNames)


// filter method--------------------------------------------------

// const numbers = [1,3,2,6,4,8]

// const isEven = function(number){
//    return number % 2 !== 0
// }

// const evenNumbers = numbers.filter(isEven)
// console.log(evenNumbers)

// const evenNumbers = numbers.filter((number)=>{
//     return number % 2 === 0;
// })
// console.log(evenNumbers)

// reduce method--------------------------------------------------------------------------------------

// const numbers = [1,2,3,4,5]

// aim: sum of all the numbers in array

// const sum = numbers.reduce((accumulator,currentValue)=>{
//     return accumulator + currentValue
// })

// console.log(sum)

// accumulator , currentValue, return 
//   1                2          3
//   3                3          6
//   6                4          10
//   10               5          15

// const userCart = [
//     {product: 1, productName: "mobile", price: 12000},
//     {product: 2, productName: "laptop", price: 22000},
//     {product: 3, productName: "tv", price: 15000},

// ]

// const totalAmount = userCart.reduce((totalPrice,currentProduct)=>{
//         return totalPrice + currentProduct.price
// },0)

// console.log(totalAmount)

// totalPrice      currentValue      return
//  0                  {}              12000
// 12000               22000           34000
// 34000               15000           49000


// sort method
// ASCII TABLE
// Char : ascii value

// "0" : 48
// "1" : 49
// "2" : 50
// "3" : 51
// "4" : 52
// "5" : 53
// "6" : 54
// "7" : 55
// "8" : 56
// "9" : 57

// ":" : 58
// ";" : 59
// "<" : 60
// "=" : 61
// ">" : 62
// "?" : 63
// "@" : 64


// "A" : 65
// "B" : 66
// "C" : 67
// "D" : 68
// "E" : 69
// "F" : 70
// "G" : 71
// "H" : 72
// "I" : 73
// "J" : 74
// "K" : 75



// "[" : 91
// "\" : 92
// "]" : 93
// "^" : 94
// "_" : 95
// "'" : 96




// "a" : 97
// "b" : 98
// "c" : 99
// "d" : 100
// "e" : 101
// "f" : 102
// "g" : 103
// "h" : 104
// "i" : 105

// sort ------------------------------------------------

// 5, 9, 1200, 400, 3000

// 5, 9, 400, 1200,3000  (expected)


// const numbers =[5, 9, 1200, 400, 3000]

// [53, 57, 49, 52, 51]

// numbers.sort()
// console.log((numbers));


// const userNames = ["harshit", "abcd", "mohit", "nitish", "ABCD", "Haresh"]

// userNames.sort()
// console.log((userNames));


// const numbers =[5, 9, 1200, 400, 3000]

// numbers.sort((a,b)=>{
//     return a-b
// })

// console.log(numbers)

// 1200, 410
// a-b ---> 790
// a-b ---> positive (greater than 0) ---> b, a

// a-b ---> negative ----> a,b
// 5, 9 ----> -4

// price lowToHigh HighToLow

// const products = [
//     {productId: 1, produceName: "p1", price: 300},
//     {productId: 2, produceName: "p2", price: 2000},
//     {productId: 3, produceName: "p3", price: 200},
//     {productId: 4, produceName: "p4", price: 8000},
//     {productId: 5, produceName: "p5", price: 500},
    
// ]

// lowToHigh

// products.sort((a,b)=>{
//     return a.price - b.price
// })
// console.log(products)

// HighToLow

// products.sort((a,b)=>{
//     return b.price - a.price
// })
// console.log(products)


// Find method -----------------------------

// const myArray = ["hello", "cat", "dog", "lion"]

// const ans = myArray.find((string)=>{
//     return string.length === 3;
// })
// console.log(ans)


// const users = [
//     {userId: 1, userName: "harshit"},
//     {userId: 2, userName: "harshit"},
//     {userId: 3, userName: "harshit"},
//     {userId: 4, userName: "harshit"},
// ]

// const myUser = users.find((user)=>{
//     return user.userId === 3;
// })

// console.log(myUser);

// every method ------------------------------------

// const numbers =[2,4,6,8,10]

// const ans = numbers.every((number)=>{
//     return number%2 === 0;
// })

// console.log(ans)


// callback function ---> true/false (boolean)
// every function ---> true/false (boolean)

// check every products price < 30000

// const products = [
//     {productId: 1, produceName: "p1", price: 3000},
//     {productId: 2, produceName: "p2", price: 2000},
//     {productId: 3, produceName: "p3", price: 2000},
//     {productId: 4, produceName: "p4", price: 80000},
//     {productId: 5, produceName: "p5", price: 500},
    
// ]


// const ans = products.every((product)=>{
//     return product.price < 30000;
// })

// console.log(ans)


// some method ------------------------------

// const numbers = [3,5,8,9]

// kya ek bhi number aisa h jo even hai 
// true

// const ans = numbers.some((number)=>{
//     return number%2 === 0;
// })

// console.log(ans)

// realistic example 

// const products = [
//     {productId: 1, produceName: "p1", price: 3000},
//     {productId: 2, produceName: "p2", price: 2000},
//     {productId: 3, produceName: "p3", price: 2000},
//     {productId: 4, produceName: "p4", price: 80000},
//     {productId: 5, produceName: "p5", price: 250000},
    
// ]

// const ans = products.some((product)=>{
//     return product.price >100000;
// })

// console.log(ans)


// fill method  ------------------------------

// value, start, end 

// const myArray = new Array(10).fill(0)
// console.log(myArray)

// const myArray = [1,2,3,4,5,6,7,8]
// myArray.fill(0,2,5)
// console.log(myArray)

// splice method --------------------------
// start , delete, insert

// const myArray = ["item1", "item2", "item3"]

// delete

// myArray.splice(1,2)
// console.log(myArray)

// // insert

// myArray.splice(1,0,5,4)
// console.log(myArray)

// insert and delete 

// myArray.splice(1,2,"inserted item1", "inserted item 2")
// console.log(myArray)

