// function declaration p-------------------------------------

// function singhHappyBirthday(){
//     console.log("happy birthday to you...")
// }

// singhHappyBirthday()

// function expression------------------------------

// const singhHappyBirthday = function(){
//     console.log("happy birthday to uh")
// }

// singhHappyBirthday()

// arrow function--------------------------------------------

// const singhHappyBirthday = ()=>{
//     console.log("happy birthday to uh")
// }

// singhHappyBirthday()


// function declaration ------------------------------------------

// function sumThreeNumbers(number1, number2,number3){
//     return number1 + number2 + number3
// }

// const returnedValue = sumThreeNumbers(6,5,4)
// console.log(returnedValue)

// function expression-------------------------------------------------

// const sumThreeNumbers = function(number1, number2, number3){
//     return number1 + number2 + number3
// }

// console.log(sumThreeNumbers(1,2,3))

// arrow function -------------------------------------------------

// const sumThreeNumbers = (number1, number2, number3)=>{
//     return number1 + number2 + number3
// }

// console.log(sumThreeNumbers(1,2,3))


// Ques
// isEven 
// input : 1 number
// output : true, false

// function declaration -------------------------------------------

// function isEven(number){
//     if(number % 2 == 0){
//         return true
//     }
    // else{
    //     return false
    // }
//     return false
// }

// console.log(isEven(6))


// function expression -------------------------------------------------

// const isEven = function(num){
//      if (num % 2 == 0){
//         return true
//      }
//      else{
//         return false
//      }
// }
// console.log(isEven(4))

// arrow function ----------------------------------


// const isEven = (num)=>{
//          if (num % 2 == 0){
//             return true
//          }
//          else{
//             return false
//          }
// }
// console.log(isEven(4))



// ques
// function
// input : string
// output : firstCharacter

// function declaration --------------------------------------------

// function firstCharacter(anyString){
//      return anyString[0]
// }

// console.log(firstCharacter("ashna"))

// function expression ---------------------------------------------------

// const firstCharacter = function(anyString){
//     return anyString[0]
// }

// console.log(firstCharacter("banku"))


// arrow function ---------------------------------------

// const firstCharacter = (anyString)=>{
//     return anyString[0]
// }

// console.log(firstCharacter("banku"))



// Ques
// function
// input : array, target (number)
// output : index of target if target present in array 


// function declaration---------------------------------- 

// function findTarget(array, target){
//     for(let i = 0; i < array.length; i++){
//         if(array[i] === target){
//             return i
//         }
//     }
//     return -1
// }

// const myArray = [1,3,8,90]

// const ans = findTarget(myArray,8)
// console.log(ans)

// function expression -----------------------------------------------

// const findTarget = function(array,target){
//     for(let i = 0; i < array.length; i++){
//         if (array[i] === target){
//             return i
//         }
//     }
//     return -1
// }

// console.log(findTarget([1,3,8,30], 8))

// arrow function ----------------------------------------------------------------

// const findTarget = (array,target)=>{
//     for(let i = 0; i < array.length; i++){
//         if (array[i] === target){
//             return i
//         }
//     }
//     return -1
// }

// console.log(findTarget([1,3,8,30], 8))


// Hoisting---------------------------------------------------


// function declaration 

// hello()
// function hello(){
//     console.log("hello world")
// }

// function expression 

// hello()
// const hello = function(){
//     console.log("hello world")
// }


// arrow function

// hello()
// const hello = ()=>{
//     console.log("hello world")
// }

// console.log(hello);   // undefined
// var hello = "hello world"
// console.log(hello)

// function inside function---------------------------------------

// const app = () =>{

//     const myFunc = () =>{
//         console.log("hello from myFunc")
//     }

//     const addTwo = (num1, num2) =>{
//         return num1 + num2
//     }

//     const mul = (num1,num2)=> num1*num2

//     console.log("inside app")
//     myFunc()
//     console.log(addTwo(2,3))
//     console.log(mul(2,3))
// }
// app()

// lexical scope 

// const myVar = "value1"

// function myApp(){
//     // const myVar = "value1"

//     function myFunc(){
//         // const myVar = "value59"
//         // console.log("inside myFunc",myVar)
//         const myFunc2 = ()=>{
//             console.log("inside myFunc", myVar)
//         }
//         myFunc2()

//     }
//     console.log(myVar)
//     myFunc()
// }

// myApp()

// block scope vs function scope

// let and const are block scope
// var is function scope

// {
//  let firstName = "harshit"
//  console.log(firstName)

// }
// console.log(firstName)  // error


// {
//     let firstName = "mohit"
//     console.log(firstName)
// }


// const firstName = "garima"
// console.log(firstName)

// if(true){
//     var firstName = "harshit"
//     console.log("hello")
// }
// console.log(firstName)

// function myApp(){
//     if(true){
//         var firstName = "harshit"
//         console.log(firstName)
//     }
//     console.log(firstName)
// }

// myApp()
// console.log(firstName)


// default parameters ----------------------------------------------

// function addTwo(a,b=8){
//     return a+b
// }
// console.log(addTwo(3,2))

// rest parameters -----------------------------------------------

// function myFunc(a,b,...c){
//     console.log(`a is ${a}`)
//     console.log(`a is ${b}`)
//     console.log(`a is ${c}`)

// }

// myFunc(1,2,3,4,5,6,7)

// function addAll(...numbers){
//     //   console.log(numbers)
//     //   console.log(Array.isArray(numbers));
//     total = 0
//     for(let number of numbers){
//         total += total + number
//     }
//     return total;
      
// }

// // addAll(3,5,6,3,2)
// console.log(addAll(1,2,4,3))

// param destructuring-----------------------------

// object
// react 

// const person = {
//     firstName: "harshit",
//     gender: "male",
//     age: 70

// }

// function printDetails(obj){
//     console.log(obj.firstName);
//     console.log(obj.gender);
//     console.log(obj.age);
 
// }

// function printDetails({firstName, gender, age}){
//     console.log(firstName);
//     console.log(gender);
//     console.log(age);
// }

// printDetails(person)

// callback function ---------------------------------------


// function myFunc2(name){
//     console.log("insid my func 2")
//     console.log("your name is",name)
// }


// function myFunc(callback){
//     console.log("hello there I am a func and I can..")
//     callback("harshit")
// }
// myFunc(myFunc2)

// myFunc([1,2,3])
// myFunc({"name":"ashna"})

// function returning function --------------------------------

function myFunc(){
    // return [1,2,3]
    // return {"name": "harshit", age: 123}
    // return "a"

    function hello(){
        // console.log("hello world")
        return "hello world"
    }
    return hello
}

const ans = myFunc()
// console.log(ans)
console.log(ans())

// higher order function means taking function as a input ans can return the function 