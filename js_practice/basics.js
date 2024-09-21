// "use strict"

// intro to variales 

// Variable can store some information 
// we can use that information later
// we can change that information later


// declare a variable

// var firstName = "Harshit"


// use a variabe

// console.log(firstName);

// change value

// firstName = "Mohit"
// console.log(firstName);

// rules for naming variables

// you cannot start with number
// 1value (invalid)
// value1 (valid)

// you can use only underscore _ or dollar symbol

// firstname = (valid)
// _firstname = (valid)

// first$name = (valid)
// $firstname = (valid)

// you cannot use spaces

// first name (invalid)

// convention

// start with small letter and use camelcase

// let keyword

// declare variable with let keyword

// let firstName = "harshit"
// console.log(firstName)


// declare constants

// const pi = 3.14
// console.log(pi)

// String indexing

// let firstname = "harshit"

// console.log(firstname[6])
// length of string
// firstName.length

// last index = length-1


// console.log(firstName.length)
// console.log(firstName[firstName.length-2]);

// trim()
// toUpperCase()
// toLowerCase()
// slice 

// let firstName = "  harshit "
// console.log(firstName.length)
// firstName = firstName.trim()
// console.log(firstName);
// console.log(firstName.length);

// let firstName = "harshit"
// firstName = firstName.toUpperCase()

// console.log(firstName);

// firstName = firstName.toLowerCase()
// console.log(firstName)

// start index
// end index

// firstName = "harshit"

// let newString = firstName.slice(0,5) //harsh
// console.log(newString)


// typeof operator

// data types (primitive datatypes)
// string "harshit"
// number 2,4,5,6
// booleans
// undefined
// null
// BigInt
// symbol

// let age = 22
// let firstName = "harshit"

// console.log(typeof(firstName))


// 22 -> "22"

// convert number to string

// let age = 22
// age = age + "";
// console.log(typeof(age)) 

// convert string to number 

// let myStr = +"34"
// console.log(typeof(myStr))


// let age = 18
// age = String(age)
// age = Number(age)
// console.log(typeof(age))

// String concatenation 

// let string1 = "harshit"
// let string2 = "vashistha"

// let fullName = string1 + " "+ string2;
// console.log(fullName)


// let string1 = "17"
// let string2 = "10"

// let newString = +string1 +  +string2;
// console.log(typeof(newString))

// template string

// let age = 22
// let firstName = "harshit"

// "my name is harshit and my age is 22 "


// let aboutMe = "my name is " + firstName + " and my age is 1"
// console.log(aboutMe)

// let aboutMe = `my name is ${firstName} and my age is ${age}`

// console.log(aboutMe)


// undefined

// let firstName;
// console.log(typeof(firstName))
// firstName = "Harshit"
// console.log(typeof firstName)


// null

// let myvariable = null;
// console.log(myvariable)

// myVariable = "harshit"
// console.log(myVariable,typeof myvariable)
// console.log(typeof null)
// bug , error

// BigInt

// let myNumber = BigInt(12)
// let sameMyNumber = 123n
// console.log(myNumber)
// console.log(sameMyNumber + myNumber)

// booleans & comparison operator
 
// let num1 = "7";
// let num2 = 7;

// console.log(num1 <= num2)

// == vs ===                        // double equal to check both datatype as well value

// console.log(num1 === num2)

// != vs !==

// console.log(num1 !== num2)

// truthy and falsy values

// falsy values-----------

// false, 0,"", null, undefined, NaN

// if else condition

// let age = 17

// if (age > 18){
//     console.log("User can play ddlc")
// }
// else{
//     console.log("User can play mario");
// }

// let num = 14;

// if(num%2==0){
//     console.log("even")
// }else{
//     console.log("odd");
// }

// truthy

// "Asb"
// 1,-1

// let firstName = "gfjgjhghj"
// if(firstName){
//     console.log(firstName)
// }
// else{
//     console.log("firstName is kinda empty")
// }



// let age = 15
// let drink;
// if(age>=5){
//     drink = "coffee"
// }else{
//     drink = "milk"
// }
// console.log(drink);


// ternary operator / conditional operator

// let age = 3
// let drink = age>=5 ? "coffee" : "milk"

// console.log(drink)

// and or operator

// let firstName = "Harshit"
// let age = 22

// if (firstName[0]==="H"){
//     console.log("your name starts with H");
// }

// if (age > 18){
//     console.log("you are above 18");
// }

// if(firstName[0] === "H" && age>18){
//     console.log("Name starts with H and above 18");
// }else{
//     console.log("inside else");
// }


// let firstName = "Harshit"
// let age = 15

// if(firstName[0] === "H" || age>18){
//     console.log("inside if");
// }else{
//     console.log("inside else");
// }


// nested if else

// winning number 19

// 19 your guess is right
// 17 too low
// 20 too high

// let winningNumber = 19
// let userGuess = +prompt("Guess a number")
// // console.log(typeof userGuess);

// if (userGuess === winningNumber){
//     console.log("Your guess is right!");
// }else{
//     if(userGuess < winningNumber){
//         console.log("too low!!!");

//     }
//     else{
//         console.log("too high!!");
//     }
// }

// if
// else if
// else if
// else


// let temperature = 50

// if(temperature <0){
//     console.log("extremely cold outside");
// }else if(temperature < 16){
//     console.log("it is cold outside");
// }else if(temperature < 25){
//     console.log("wheather is okay");
// }else if(temperature < 35){
//     console.log("lets go for swim");
// }else if(temperature < 45){
//     console.log("turn on Ac");
// }else{
//     console.log("too hot!!");
// }
// console.log("hello")


// let day = 6;
// if(day ===0){
//     console.log("sunday")
// }else if(day===1){
//     console.log("Monday")
// }else if(day===2){
//     console.log("Tuesday")
// }else if(day===3){
//     console.log("Wednesday")
// }else if (day ===4){
//     console.log("THursday")
// }else if(day === 5){
//     console.log("Friday")
// }else if(day === 6){
//     console.log("Saturday")
// }else{
//     console.log("Invalid Day")
// }

// switch statement ------------------


// let day = 9;

// switch(day){
//     case 0:
//         console.log("Sundayd")
//         break
//     case 1:
//         console.log("Monday")
//         break
//     case 2:
//         console.log("Tuesday")
//         break
//     case 3:
//         console.log("Wednesday")
//         break
//     case 4:
//         console.log("Thursday")
//         break
//     case 5:
//         console.log("Friday")
//         break
//     case 6:
//         console.log("Saturday");
//         break
//     default:
//         console.log("Invalid day");

// }

// while loop---------------------

// 0 to 9
// dry don't repeat yourself

// let i = 0
// while(i<=3){
//     console.log(i);
//     i++
// }


// example

// let num = 10;
// let sum = 0
// let i = 0
// while (i<=10){
//     sum =sum+i
//     i=i+1
// }
// console.log(sum);


// For loop

// intro to for loop
// print 0 to 9

// for(let i = 0;i<=9;i++){
//     console.log(i)
// }
// console.log(i);


// example

// let total = 0
// let num = 10
// for(let i = 0;i<=num;i++){
//     total+=i
// }
// console.log(total);

// break keyword

// for(let i = 1; i<=10;i++){
//     if(i==4){
//         break
//     }
//     console.log(i);
// }
// console.log("hello");

// continue


// for(let i = 1; i<=10;i++){
//     if(i==4){
//         continue
//     }
//     console.log(i);
// }
// console.log("hello");

// do while loop

// let i = 0
// while (i<=9){
//     console.log(i);
//     i++
// }

// let i = 10
// do{
//     console.log(i)
//     i++;
// }while(i<=9)

// Array----------------------------------

// intro to array
// reference type
// how to create arrays

// ordered collection of items

// let numbers = [1,2,3,4,5]
// let mixed = [1,2,3,4.5, "string",null,undefined]
// console.log(mixed);
// console.log(numbers);

// let fruits = ["apple","mango","grapes"]
// let obj = {}
// console.log(fruits)
// console.log(fruits[0])
// fruits[1] = "banana"
// console.log(fruits);
// console.log(typeof fruits);
// console.log(typeof obj);

// console.log(Array.isArray(fruits));
// console.log(Array.isArray(obj));

// array push pop

// let fruits = ["apple","mango","grapes"]
// console.log(fruits);

// push
// fruits.push("banana")
// console.log(fruits);

// pop

// let poppedfruits = fruits.pop()
// console.log(poppedfruits);
// console.log(fruits);

// unshift

// fruits.unshift("banana")
// fruits.unshift("myfruit")
// console.log(fruits);

// shift

// let removedFruit = fruits.shift()
// console.log(fruits);
// console.log("removed fruit is ", removedFruit);

// primitive vs reference datatypes

// let num1 = 6
// let num2 = num1
// console.log("value of num1 is ", num1);
// console.log("value of num2 is ", num2);
// num1++
// console.log("after incrementing num1");
// console.log("value of num1 is",num1)
// console.log("value of num2 is",num2);

// reference types
// array

// let array1 = ["item1","item2"]
// let array2 = array1
// console.log("array1", array1);
// console.log("array2", array2);

// array1.push("item3")

// console.log("array1", array1);
// console.log("array2", array2);

// how to clone array

// how to concatenate two arrays

// let array1 = ["item1","item2"]
// let array2 = ["item1","item2"]

// let array2 = array1.slice(0)
// array1.push("item3")

// console.log(array1 === array2)
// console.log(array1)
// console.log(array2)


// reference types
// array

// let array1 = ["item1","item2"]
// let array2 = array1

// console.log(array1);
// console.log(array2);

// array1.push("item3")

// console.log("after pushing element to array 1");
// console.log("array1",array1);
// console.log("array2",array2);


// array1.push("item3")

// console.log("after pushing element to array 1");
// console.log("array1",array1);
// console.log("array2",array2);


// how to clone array

// 1st 

// let array1 = ["item1","item2"]
// let array2 = ["item1","item2"]
// array1.push("item3")

// console.log(array1 === array2);
// console.log(array1);
// console.log(array2);

// 2nd

// let array1 = ["item1","item2"]

// let array2 = array1.slice(0)
// // let array2 = [].concat(array1)

// array1.push("item3")
// console.log(array1 === array2);

// console.log(array1);
// console.log(array2);

// 3rd
// new way
// spread operator


// let array1 = ["item1","item2"]
// let oneMoreArray = ["item6","item7"]
// let array2 = [...array1,"item3","item4",...oneMoreArray]

// array1.push("item3")
// console.log(array1 === array2);

// console.log(array1);
// console.log(array2);

// How to concate two arrays

// let array1 = ["item1","iem2"]
// let array2 = array1.slice(0).concat(["item3","item4"])
// let array2 = [].concat(array1,["item3","item4"])
// console.log(array2);


// for loop in array

// let fruits = ["Apple","mango","grapes","banana"]

// for(let i = 0; i<=9; i++){
//     console.log(fruits[i])
// }

// console.log(fruits.length);
// console.log(fruits[fruits.length-2]);


// let fruits2 = []
// for (let i = 0;i<fruits.length;i++){
//     fruits2.push(fruits[i].toUpperCase());
// }

// console.log(fruits2);


// Use const for creating array

// const fruits = ["apple","mango"]
// fruits.push("banana")
// console.log(fruits);


// While loop in array

// const fruits = ["Apple","mango","grapes"]
// const fruits2 = []
// let i = 0
// while (i<fruits.length){
//     fruits2.push(fruits[i].toUpperCase());
//     i=i+1
// }
// console.log(fruits2);

// for of loop in array

// const fruits = ["apple","mango","grapes","fruit4"]
// const fruits1 = []
// for(let fruit of fruits){
//     fruits1.push(fruit.toUpperCase());
// }

// console.log(fruits1);


// For in loop in array

// const fruits = ["apple","mango","grapes","fruit4"]
// const fruits1 = []

// for(let index in fruits){
//     console.log(fruits[index]);
// }


// Array destructuring ------------

// const myArray = ["value1","value2","value3","value4","value5"]
// let myvar1 =myArray[0]
// let myvar2 =myArray[1]
// console.log("value of myvar1", myvar1);
// console.log("value of myvar2", myvar2);

// let [myvar1, ,myvar2,...myNewArray] = myArray;

// console.log(myvar1);
// console.log(myvar2);

// console.log(myNewArray);


// objects reference type
// arrays are good but not sufficient
// for real world data
// objects store key value pairs
// objects don't have index

// how to create objects

// const person = {name:"Harshit",age:"22"}
// const person = {
//       name: "harshit",
//       age:22,
//       hobbies:["guitar","sleeping","listening music"]
// }

// how to access data from objects
// console.log(person["name"]);
// console.log(person["age"]);
// console.log(person.name);
// console.log(person.age);
// console.log(person.hobbies);


// how to add key value pair to objects

// person.gender = "male"
// console.log(person);
// person["person"] = "male"
// console.log(person)

// difference between dot and bracket notation

// const person = {
//     name: "harshit",
//     age:22,
//     "person hobbies":["guitar","sleeping","listening music"]
// }

// console.log(person["person hobbies"]);

// How to iterate object

// const person = {
//     name: "harshit",
//     age:22,
//     "person hobbies":["guitar","sleeping","listening music"]
// }

// for in loop


// for(let key in person){
//     console.log(key,":",person[key]);
// }

// object.keys

// console.log( Object.keys(person))
// const val = Array.isArray((Object.keys(person)))
// console.log(val);

// computed properties

// const key1 = "objkey1"
// const key2 = "objkey2"

// const value1 = "myvalue1"
// const value2 = "myvalue2"

// const obj = {
//     objkey1 : "myvalue1"
//     objkey2 : "myvalue2"
// }

// const obj = {
//     [key1] : value1,
//     [key2] : value2
// }

// const obj = {}

// obj[key1] = value1
// obj[key2] = value2
// console.log(obj)


// spread operator in array-----------


// const array1 = [1,2,3]
// const array2 = [5,6,7]

// const newAarray = [...array1, ...array2, 89, 69]
// // const newAarray = [..."abc"]
// console.log(newAarray)

// spread ooperator in objects

// const obj1 = {
//     key1: "value1",
//     key2: "value2",
// }

// const obj2= {
//     key1: "valueUnique",
//     key3: "value3",
//     key4: "value"
// }

// const newObject = {...obj2, ...obj1,key69: "value"}
// console.log(newObject);

// Object destructuring


// const band = {
//     bandName: "Led zepplin",
//     famousSong: "stairway to heaven",
//     year: 1968,
//     anotherFamousSong: "kashmir",
// }
// let bandName = band.bandName
// const famousSong = band.famousSong

// console.log(bandName, famousSong)

// let {bandName:var1, famousSong, ...restProps} = band
// // bandName = "queen"
// console.log(var1, famousSong)
// console.log(restProps);

// objects inside array
// very useful in real world application

// const users = [
//     {userId: 1,firstName: "harshit", gender: "male"},
//     {userId: 2,firstName: "mohit", gender: "male"},
//     {userId: 3,firstName: "nitish", gender: "male"},
   
// ]

// console.log(users)

// for(let user of users){
//     console.log(user.firstName)
// }

// const [{firstName},,{gender}] = users
// console.log(firstName)
// console.log(gender);


// functions-------------------

// Function expression


// function singhHappyBirthday(){
//     console.log("happy birthday to uh.........")
// }
// singhHappyBirthday()

// function expression 

// const singhHappyBirthday = function (){
//         console.log("happy birthday to uh.........")
// }
// console.log(singhHappyBirthday())


// function twoPlusFour(){
//     console.log(2+4)
// }
// twoPlusFour()




// function twoPlusFour(){
//     return(2+4)
// }
// console.log(twoPlusFour())


// function twoPlusFour(){
//     return(2+4)
// }
// const returnValue = twoPlusFour()
// console.log(returnValue)


// function sumTwoNumbers(num1,num2){
//     return num1 + num2
// }
// const returnedVlaue = sumTwoNumbers(4,5)
// console.log(returnedVlaue)


// function sumThreeNumbers(num1,num2,num3){
//     return num1 + num2 + num3
// }
// const returnedVlaue = sumThreeNumbers(4,5,4)
// console.log(returnedVlaue)


// function expression

// const sumThreeNumbers = function(num1,num2,num3){
//     return num1 + num2 + num3
// }
// const returnedVlaue = sumThreeNumbers(4,5,4)
// console.log(returnedVlaue)


// odd or even

// function isEven(number){
//      if(number % 2 ===0){
//         return true
//      }
//      return false
// }

// console.log(isEven(3));

// first char of string


// function firstChar(anyString){

//         return anyString[0]

// }
// console.log(firstChar("abc"));


// array function

// function findTarget(array,target){
//     for(let i=0; i<array.length;i++){
//         if(array[i]===target){
//             return i;
//         }
//     }
//     return -1
// }
// const myArray = [1,3,8,90]
// const ans = findTarget(myArray,4)
// console.log(ans)


// Arrow function


// const singhHappyBirthday = () => {
//         console.log("happy birthday to uh.........")
// }
// console.log(singhHappyBirthday())



// const sumThreeNumbers = (num1,num2,num3)=>{
//     return num1 + num2 + num3
// }
// const returnedVlaue = sumThreeNumbers(4,5,4)
// console.log(returnedVlaue)


// const isEven = (number)=>{
//      if(number % 2 ===0){
//         return true
//      }
//      return false
// }

// console.log(isEven(3));



// const findTarget = (array,target)=>{
//     for(let i=0; i<array.length;i++){
//         if(array[i]===target){
//             return i;
//         }
//     }
//     return -1
// }
// const myArray = [1,3,8,90]
// const ans = findTarget(myArray,4)
// console.log(ans)


// hoisting-----------------------------------------------------------------------


// hello()

// function hello(){
//     console.log("hello world");
// }

// console.log(hello);
// var hello = "hello world"
// console.log(hello);

// functions inside function------------------------------------------------------


// const app =()=>{
//     const myFunc = ()=>{
//         console.log("hello form myFunc");
//     } 
    
//     const addTwo = (num1, num2)=>{
//         return num1 + num2
//     }

//     const mul = (num1,num2) => num1*num2
    
//     console.log("inside app");
//     myFunc()
//     console.log(addTwo(2,3))
//     console.log(mul(2,5));
// }

// app()

// lexical scope----------------------------------------------------------------------------------------------------

// function myApp(){
    
//     const myVar = "value1"
//     function myFunc(){
//             // console.log("inside myFunc",myVar)
//         const myFunc2 = ()=>{
//             console.log("inside myfunct", myVar);
//         }
//         myFunc2()
//     }
    // const myFunc2 = function(){

    // }
    // const myFunc3 = ()=>{

    // }
//     console.log(myVar)
//     myFunc()
// }
// myApp()


// block scope vs function scope-------------------------------------------------------------------------
// let and const are block scope
// var is function scope

// {
//     let firstName = "harshit"       
// }
// console.log(firstName)             // it will give us error due to having block scope

// {
//     let firstName = "mohit"
//     console.log(firstName);
// }


// {
//     var firstName = "harshit"       
// }
// console.log(firstName)             // In var case it will not give error 



// if(true){
//     var firstName = "harshit"
//     console.log("hello");
// }

// console.log(firstName);

// default parameter---------------------------

// function addTwo(a,b){
//     if(typeof b === "undefined"){
//         b = 0
//     }
//     return a+b
// }

// const ans = addTwo(2)
// console.log(ans)


// function addTwo(a,b=2){
    
//     return a+b
// }

// const ans = addTwo(2)
// console.log(ans)


// Rest Parameters--------------------------------------------------------------------------------------

// function myFunc(a,b,...c){
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is `,c);
// }

// myFunc(3,4,5,6,7,8,9)

// addAll(1,2,3,4,5,6,7)

// function addAll(...numbers){
//     // console.log(numbers);
//     // console.log(Array.isArray(numbers));
//     let total = 0 
//     for(let number of numbers){
//         total = total + number
//     }
//     console.log(total)
// }


// addAll(1,2,3,4,5)


// Parameter destructuring------------------------------------------------------------

// Object
// react

// const person = {
//     firstName: "harshit",
//     gender : "male"
// }

// function printDetails(obj){
//     console.log(obj.firstName);
//     console.log(obj.gender);
// }


// function printDetails({firstName, gender, age}){
//     console.log(firstName);
//     console.log(gender);
//     console.log(age);
// }
// printDetails(person)


// callback functions--------------------------------------------------

// function myFunc2(name){
//    console.log("hello world");
//    console.log(`your name is ${name}`);
// }

// function myFunc(callback){
//     console.log("hello there I am a func and I can");
//     callback("harshit")
// }

// myFunc(myFunc2)

// function returning function--------------------------------------

// function myFunc(){
//     // return "a";
//     // return [1,2,3,4,5]
//     // return {name: "ashna",age: 2}
//     function hello(){
//         return "hello world"
//         console.log("hello world");
//     }
//     return hello
// }

// const ans = myFunc();
// // console.log(ans)
// // ans()
// console.log(ans());

// Most Important array Method----------------------------------------------------

// forEach
// map
// filter
// reduce

// const numbers = [4,2,5,8]

// function multiplyBy2(number,index){
//     console.log("index is", index)

// }

// numbers.forEach(function(number,index){
//     console.log(`index is ${index} number is ${number}`);
// })

// numbers.forEach(function(number){
//       console.log(number*2)
// })

// const users = [
//     {firstName: "harshit", age: 23},
//     {firstName: "mohit", age: 21},
//     {firstName: "nitish", age: 22},
//     {firstName: "garima", age: 26},
//     {firstName: "ashna", age: 20},

// ]

// users.forEach(function(user){
//     console.log(user.firstName)
// })

// users.forEach((user)=>{
//     console.log(user.firstName)
// })

// for(let user of users){
//     console.log(user.firstName);
// }


// Map method

// const numbers = [3,4,6,1,8]

// let squareNumber = numbers.map((number)=>{
//     return number * number
// })
// console.log(squareNumber);


// const users = [
//     {firstName: "harshit", age: 23},
//     {firstName: "mohit", age: 21},
//     {firstName: "nitish", age: 22},
//     {firstName: "garima", age: 26},
//     {firstName: "ashna", age: 20},

// ]

// const userNames = users.map((user)=>{
//     return user.firstName
// })

// console.log(userNames);


// filter---------------------------------------------------

// const numbers = [1,2,3,4,5,6,7,8]

// const evenNumbers  = numbers.filter((number)=>{
//     return number % 2==0
// })
// console.log(evenNumbers);


// Reduce methods

// const numbers = [1,2,3,4,5]


// aim: sum of all the numbers in array

// const sum = numbers.reduce((accumulator,currentValue)=>{
//       return accumulator + currentValue
// })
// console.log(sum)

// const userCart = [
//     {productId: 1,productName: "mobile", price: 12000},
//     {productId: 2,productName: "laptop", price: 22000},
//     {productId: 3,productName: "tv", price: 15000}, 
    
// ]

// const totalAmount = userCart.reduce((totalPrice,CurrentProduct)=>{
//          return totalPrice + CurrentProduct.price
// },0)

// console.log(totalAmount)

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



// sort-----------------------------------------------------------------------------------------

// 5,9,1200,400,3000
// 5,9,400,1200,3000

// const numbers = [5,9,1200,400,3000]
// ["5","9","1200","400","3000"]
// [53, 57, 49, 52, 51]
// numbers.sort()         
// console.log(numbers)



// const userNames = ["harshit", "abcd", "mohit", "nitish"]
// userNames.sort()         
// console.log(userNames)


// const numbers = [5,9,1200,400,3000]
// numbers.sort((a,b)=>{
//     return a-b;

// })
// console.log(numbers)

// price lowtohigh and hightolow

// const products = [
//     {productId: 1, produceName: "p1", price: 300},
//     {productId: 2, produceName: "p2", price: 2000},
//     {productId: 3, produceName: "p3", price: 200},
//     {productId: 4, produceName: "p4", price: 8000},
//     {productId: 5, produceName: "p5", price: 500},
    
// ]

// lowTohigh

// products.sort((a,b)=>{
//     return a.price - b.price
// })

// console.log(products);

// hightolow

// products.sort((a,b)=>{
//     return  b.price - a.price
// })

// console.log(products);



// Find method---------------------------------------------------------


// const myArray = ["Hello", "cat", "dog", "lion"]

// function isLength(string){
//     return string.length === 3;
// }

// const ans = myArray.find((string)=>string.length === 3)

// console.log(ans)


// const users = [
//     {userId : 1, userName: "harshit"},
//     {userId : 2, userName: "harsh"},
//     {userId : 3, userName: "nitish"},
//     {userId : 4, userName: "mohit"},
//     {userId : 4, userName: "mohit"},
// ]

// const myUser = users.find((user)=> {
//     return user.userId === 3

// }) 
// console.log(myUser)


// every method------------------------------

// const numbers = [2,4,6,8,10]

// const ans = numbers.every((number)=>{
//     return number % 2===0
// })

// console.log(ans)


// const userCart = [
//     {productId: 1,productName: "mobile", price: 12000},
//     {productId: 2,productName: "laptop", price: 22000},
//     {productId: 3,productName: "tv", price: 15000}, 
    
// ]

// const ans = userCart.every((cartItem)=> cartItem.price < 30000)

// console.log(ans);


// some method--------------------------------------------------------

// const numbers = [3,5,8,9]

// kya ek bhi number esa hai jo even hai
// true

// const ans = numbers.some((number)=>{
//     return number % 2 === 0
// })

// console.log(ans)


// const userCart = [
//     {productId: 1,productName: "mobile", price: 12000},
//     {productId: 2,productName: "laptop", price: 22000},
//     {productId: 3,productName: "tv", price: 250000}, 
    
// ]

// const ans = userCart.some((user)=>{
//     return user.price > 100000
// })

// console.log(ans)

// fill method
// value, start , end


// const myArray = [1,2,3,4,5,6,7,8]
// myArray.fill(0,2,5)
// console.log(myArray)


// splice method------------------------------------------------------------
// start , delete, insert
// const myArray = ["item1", "item2", "item3"]

// delete
// myArray.splice(1,1)

// insert
// myArray.splice(1,0,"inserted item")

// insert and delete

// myArray.splice(1,2,"inserted item1 ","inserted item2")

// console.log(myArray)



// iterables      
// jispe hum for of loop laga sakein
// string , array are iterable 

// const firstName = "Harshit"
// for (let char of firstName){
//     console.log(char)
// }

// const items = ["item1", "item2", "item3"]
// for (let item of items){
//     console.log(item)
// }


// const users = {'key1' : "value1", key2: "value2"}  // object are not iterable
// for (let item of users){
//     console.log(item)
// }


// array like object
// jinke pas length property hoti hai
// aur jinko hum index se access kr sakte h
// example :- string 


// const firstName = "harshit";
// console.log(firstName.length)
// console.log(firstName[2]);


// Sets (it is iterable)
// store data
// set also have it's own methods 
// No index-based access 
// Order is not guaranteed
// unique items only (no dublicates allowed)

// const numbers = new Set([1,2,3])
// const numbers = new Set("abc")

// console.log(numbers)

// console.log(numbers[2])

// empty set------------

// const items = ["item1", "item2", "item3"]
// const numbers = new Set();
// numbers.add(1)
// numbers.add(2)
// numbers.add(2)
// numbers.add(items)
// numbers.add(["item1","item2"])
// numbers.add(["item1","item2"])
// console.log(numbers.has(1))
// console.log(numbers)

// for(let number of numbers){
//     console.log(number)
// // }

// const myArray = [1,2,4,4,5,6,5,6]
// const uniqueElements = new Set(myArray)
// console.log(uniqueElements)
// console.log(myArray)
// let length = 0
// for (let elements of uniqueElements){
//     length++
// }
// console.log(length)



// Object literal
// key - string
// key - symbol

// const person = {
//     firstName : "harshit",
//     age : 7,
//     1 : "one"
// }

// console.log(person.firstName)
// console.log(person["firstName"])
// for (let key in person){
//     console.log(typeof key)
// }


//  Maps
// key value pair

// const person = new Map()




// this is the main important part 
// ys this is the main part
// no that is the main part 


// const map = app()
// console.log(map)
// console.log("ashna")

// console.log("ashna dubey")




