// synchronous programming vs asynchronous programming

// synchronous programming 
// synchronous programming  single threaded

// console.log("Script start")

// for(let i = 1; i<100; i++){
//     console.log("inside for loop")
// }

// console.log("Script end")


// setTimeout-----------------------------------------------

// eg-
// function hello(){
//     console.log("hello world")
// }

// console.log("script start")

// setTimeout(()=>{
//     console.log("inside setTimeout")
// },1000)
// console.log("script end")

// eg-------

// console.log("script start")

// setTimeout(()=>{
//     console.log("inside setTimeout")
// },0)

// for(let i = 1; i< 100; i++){
//     console.log("....")
// }

// console.log("script end")


// eg-------


// console.log("script start")

// const id = setTimeout(()=>{
//     console.log("inside setTimeout")
// },0)

// for(let i = 1; i< 100; i++){
//     console.log("....")
// }
// console.log("settimeout id is", id)
// console.log("clearing time out")
// clearTimeout(id)
// console.log("script end")


// eg-------

// setInterval

// console.log("script start")

// setInterval(()=>{
//     // console.log(Math.random()
//     for(let i = 0; i<1000000; i++){
//         total += i
//     }
//      console.log(total)
//      console.log(Math.random())

    
// },500)
// console.log("script end")



// Understand call back 

// Callback--

// A callback is a function that is passed as an argument to another function and is executed after it's parent function has completed

// Synchronous programming
// It run code from top to bottom, line by line

// Js - function >> First class citizen

// function myFunc(callback){

//     console.log("FUnction is doing some task 1")
//     callback()
// }
// function myFunct2(){
//     console.log("Function is doing task 2")
// }

// myFunc(myFunct2)
// myFunc(function(){
//     console.log("function is doing task 2")
// })

// myFunc(()=>{
//     console.log("function is doing task 2")
// })


// function getTwoNumbers(num1,num2, callback){
//     //   console.log(num1, num2)
//     if(typeof num1 === "number" && typeof num2 === "number"){
//         callback(num1, num2)
//     }
//     else{
//         console.log("wrong datatypes")
//     }
 
// }

// getTwoNumbers(4,5,(num1,num2)=>{
//     console.log(num1 + num2)
// })

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2)
// }

// eg---------------------


// function getTwoNumbers(num1,num2, onSuccess, onFailure){
//     if(typeof num1 === "number" && typeof num2 === "number"){
//         onSuccess(num1, num2)
//     }
//     else{
//         onFailure("wrong datatypes")
//     }
 
// }

// getTwoNumbers("4","5",(num1,num2)=>{
//     console.log(num1 + num2)
// }, ()=>{
//     console.log("wrong datatype")
//     console.log("please pass numbers only")
// })

// Callbacks, callback hell, pyramid of doom--------------------------------------------
// asynchronous programming




// Callback -
// A callback is a function that is passed as an argument to another function and is executed after its parent function has completed.

// syncronous programming
// it run code from top to bottom, line by line


// Js - functions >> First Class Citizen


// function sayHello(){
//     console.log("Hello");
// }

// function sayBye(callback){
//     console.log("Bye");
// }

// sayBye(sayHello);

// Seeta 

// Hotel enter
// order food
// wait for food - food is preparing - 10 min
// food is ready - delivered to the table - 5 min
// eating food - 15 min
// payment - 3 min
// leave hotel



// function EnterHotel(){
//     console.log("Enter Hotel");
// }

// function orderFood(param){
//     console.log("Order Food");
//     param()
// }

// function waitFood(callback){
//     setTimeout(()=>{
//         console.log("wait for food - food is preparing");
//         callback();
//     }, 10000)  
// }

// function foodReady(callback){
//     setTimeout(()=>{
//         console.log("food is ready - delivered to the table");
//         callback();
//     },5000)
// }

// function eatFood(callback){
//     setTimeout(()=>{
//         console.log("eating food");
//         callback();
//     },15000)
// }

// function payment(callback){
//     setTimeout(()=>{
//         console.log("payment");
//         callback();
//     },3000)
// }

// function leaveHotel(){
//     console.log("leave hotel");
// }

// function rating(){
//     console.log("Rating");
// }


// function dinner(){
//     EnterHotel();
//     orderFood(()=>{
//         waitFood(()=>{
//             foodReady(()=>{
//                 eatFood(()=>{
//                     payment(()=>{
//                         leaveHotel(rating)
//                     })
//                 })
//             })
//         });
//     });
// }

// dinner();



// Promise
// create promise


// console.log("script start")
// const bucket = ["coffee", "chips", "vegetables", "rice"]

// const friedRicePromise = new Promise((resolve, reject)=>{
//     if(bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")){
//         resolve("Fried Rice")
//     }else{
//         reject("Couldn't do it")
//     }
// })

// Produce


// consume
// how to consume

// friedRicePromise.then(
//     (value)=>{
//     console.log("let's eat",value)
// }).catch(
//     (error)=>{
//     console.log(error)
// })

// setTimeout(()=>{
//     console.log("set Timeout")
// },0)

// for (let i = 0; i <= 100; i++){
//    console.log(Math.random(),i)
// }

// console.log("script end")

// returning promise by using function-----

// function ricePromise(){
//     const bucket = ["coffee", "chips", "vegetables","salt", "rice"]
//     return new Promise((resolve,reject)=>{
//     if(bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")){
//             resolve("Fried Rice")
//     }else{
//             reject("Couldn't do it")
//         }
//     })
// }

// ricePromise().then((value)=>{
//     console.log(value)
// }).catch((error)=>{
//     console.log(error)
// })


// Promise  && setTimeout 
//  I want to resolve/ reject promise after 2 min

// function myPromise(){
//     return new Promise((resolve,reject)=>{
//         const value = false
//         setTimeout(()=>{
//             if(value){
//                 resolve()
//             }else{
//                 reject()
//             }
//         },2000)
//     })
// }

// myPromise().then(()=>{
//    console.log("resolve")
// }).catch(()=>{
//     console.log("reject")
// })



// then()
// then method hamesha promise return krta h
// Promise Chaning


// function myPromise(){
//     return new Promise((resolve,reject)=>{
//         resolve("foo")
//     })
// }

// myPromise()
// .then((value)=>{
//     console.log(value)
//     value += "bar"
//     return value 
// })
// .then((value)=>{
//     console.log(value)
//     value += "baaz"
//     return value
// })
// .then((value)=>{
//   console.log(value)
// })


// Basic Theory

// AJAX : asynchronous javascript and XML

// HTTP request

// is a set of "web development"
// using many web technologies on the "client-side"
// to create asynchronous web application


// With Ajax, web applications can send and retrieve
// data from a server asynchronously (in the background)
// without interfering with the display and 
// behaviour of the existing page

// We don'r use data in XML format anymore
// we use JSON now

// we have 3 most common ways to create and send request to server
// 1.) xmlHTTPRequest (old way of doing)
// 2.) fetch API (new way of doing)
// 3.) axios (this is third party library)

// const URL = "https://jsonplaceholder.typicode.com/posts"

// const xhr = new XMLHttpRequest()
// // console.log(xhr)
// // step 1
// xhr.open("GET",URL)
// xhr.onreadystatechange = function(){
//     console.log(xhr)
// }
// xhr.send()


// Fetch---------------------------

// const URL = "https://jsonplaceholder.typicode.com/posts"

// fetch(URL)
// .then((response)=>{
//     if(response.ok){
//         return response.json()
//     }else{
//         throw new Error("Something went wrong")
//     }
// }).then ((data)=>{
//     console.log(data)
// }).catch((error)=>{
//     console.log("inside catch")
//     console.log(error)
// })


// async await----------------------------


// fetch(URL)
// .then((response)=>{
//     return response.json()
// }).then((data)=>{
//     console.log(data)
// })


// const URL = "https://jsonplaceholder.typicode.com/postss"


// async function getPosts(){
//     const response = await  fetch(URL)
//     if(!response.ok){
//       throw new Error ("something went wrong")
//     }
//     const data = await response.json()
//     return data

// }

// getPosts()
// .then((data)=>{
//     console.log(data)
// })
// .catch((error)=>{
//     console.log(error)
// })




// function sayhello(){
    
//     setTimeout(()=>{
//         console.log("hello")
//     },5000)
   
// }

// function saybye(callback){
//     callback()
//     console.log("world")
// }
// saybye(sayhello)


// Task

// Senario-
// ATM
// Enter ATM
// Insert Card - 2sec
// Enter Pin -  2sec
// Select Language - 1sec
// Select Account -1sec
// Withdraw Money -1sec
// Processing waiting for cash - 3sec
// Collect Cash -2sec
// Remove Card -1sec
// Exit ATM

// Convert this into promises and async/await.



function enterAtm(){
    console.log("enter atm")
}

function insertCard(){
    setTimeout(()=>{
       console.log("insert card")
    },2000)
}

function enterPin(){
    setTimeout(()=>{
       console.log("enter Pin")
    },2000)
}



function selectLanguage(){
    setTimeout(()=>{
       console.log("select language")
    },1000)
}


function selectAcccount(){
    setTimeout(()=>{
       console.log("select account")
    },1000)
}


function WithdrawMoney(){
    setTimeout(()=>{
       console.log("withDrawMoney")
    },1000)
}


function waitingForCash(){
    setTimeout(()=>{
       console.log("waitingForCash")
    },3000)
}

function collectCard(){
    setTimeout(()=>{
       console.log("collect Cash")
    },2000)
}

function removeCard(){
    setTimeout(()=>{
       console.log("withDrawMoney")
    },1000)
}



function ExitAtm(){

       console.log("withDrawMoney")
   
}




