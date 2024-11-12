// synchronous programming vs asynchronous programming 

// synchronous programming 

// js is a synchrounous programming and single threaded language 

// console.log("script start")

// for(let i = 0; i< 1000; i++){
//     console.log("inside for loop")
// }

// console.log("script end")

// setTimeout 

console.log("Script start")


const id = setTimeout(()=>{
    console.log("inside settime out")
},1000)

for(let i = 0; i < 100; i++){
    console.log("...")
}

console.log("settimeout id is ", id)
console.log("clearing time out")
// clearTimeout(id)

console.log("script end")




// setInterval ----------------

// console.log("script start")
// setInterval(()=>{  
//     console.log(Math.random())
// },500)

// console.log("script end")

// understand callback -------------------------------------------

// function myFunc(callback){
//     console.log("function is doing task1 ")
//     callback()
// }

// function myFunc2(){
//     console.log("function is doing task 2 ")
// }

// myFunc(myFunc2)

// Example----

// function getTwoNumbersAdd(number1, number2,onSuccess, onFailure){
//     if(typeof number1 === "number" && typeof number2 === "number"){
//         onSuccess(number1, number2)
//     }   
//     else{
//         onFailure()
//     }
// }

// getTwoNumbersAdd("2",4,(number1,number2)=>{
//     console.log(number1 + number2)
// }, ()=>{
//     console.log("datatype is not correct")
// })


// Callbacks, callback hell, pyramid of doom

// asynchronous programming

// const heading1 = document.querySelector(".heading1")
// const heading2 = document.querySelector(".heading")
// const heading3 = document.querySelector(".heading3")
// const heading4 = document.querySelector(".heading4")
// const heading5 = document.querySelector(".heading5")
// const heading6 = document.querySelector(".heading6")
// const heading7 = document.querySelector(".heading7")
// const heading8 = document.querySelector(".heading8")
// const heading9 = document.querySelector(".heading9")
// const heading10 = document.querySelector(".heading10")

// setTimeout(()=>{
//      heading1.textContent = "one"
//      heading1.style.color = "violet"
//      setTimeout(()=>{
//         heading2.textContent = "two"
//         heading2.style.color = "purple"
//         setTimeout(()=>{
//             heading3.textContent = "three"
//             heading3.style.color = "red"
//             setTimeout(()=>{
//                 heading4.textContent = "four"
//                 heading4.style.color = "red"
//                 setTimeout(()=>{
//                     heading5.textContent = "five"
//                     heading5.style.color = "green"
                
//                 },2000)
            
//             },1000)
        
//         },2000)
    
//     },2000)
// },1000)


// function example 



// function changeText(element, text, color, time,onSuccessCallback,onFailureCallback){
//     setTimeout(()=>{
//         if(element){
//             element.textContent = text
//             element.style.color = color
//             if(onSuccessCallback){
//                 onSuccessCallback()

//             }else{
//                 if(onFailureCallback){
//                     onFailureCallback()
//                 }
//             }

//         }else{
//             console.log("your element doesn't exist")
//         }
    
//     },time)
// }



// changeText(heading1, "one", "green", 1000, ()=>{
//     changeText(heading2, "two", "red", 2000, ()=>{
//         changeText(heading3, "three", "violet", 1000, ()=>{
//             changeText(heading4, "four", "pink", 1000, ()=>{
//                 changeText(heading5, "five", "blue", 1000, ()=>{
//                     changeText(heading6, "six", "purple", 1000, ()=>{
//                         changeText(heading7, "seven", "yellow", 1000, ()=>{
//                             changeText(heading8, "eight", "brown", 1000, ()=>{
//                                 changeText(heading9, "nine", "orange", 1000, ()=>{
//                                     changeText(heading10, "ten", "black", 1000, ()=>{
                                
//                                     },()=>(console.log("heading10 doesn't exist")))
//                                 },()=>(console.log("heading9 doesn't exist")))
//                             },()=>(console.log("heading8 doesn't exist")))
//                         },()=>(console.log("heading7 doesn't exist")))
//                     },()=>(console.log("heading6 doesn't exist")))
//                 },()=>(console.log("heading5 doesn't exist")))
//             },()=>(console.log("heading4 doesn't exist")))
//         },()=>(console.log("heading3 doesn't exist")))
//     },()=>(console.log("heading2 doesn't exist")))
// },()=>(console.log("heading1 doesn't exist")))

// this is called callback hell can considered pyramid of doom

// Promises ------------------------------------------------------------------------------

// console.log("script start")

// const bucket = ["coffee", "chips", "vegetables", "salt", "rice"]

// promise is a object that takes a callback function that takes two parameter resolve abd reject 

// const friedRicePromise = new Promise((res,rej)=>{
//     if(bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")){
//         res("fried rice")
//     }else{
//         rej("couldn't do it")
//     }
// })

// produce


// consume 
// here to consume

// friedRicePromise.then(
//     // jab promise resolve hoga
//     (myfriedRice)=>{
//     console.log("lets eat ", myfriedRice)
//     }
//     ,
//     // jab promise reject hoga
//     (error)=>{
//        console.log(error)
//    })


// friedRicePromise.then(
//     // jab promise resolve hoga
//     (myfriedRice)=>{
//     console.log("lets eat ", myfriedRice)
//     }
  
// ).catch((error)=>{
//     console.log(error)
// })

// setTimeout(()=>{
//     console.log("hello from set Time out")
// },0)


// for(let i = 0; i <= 100; i++){
//     console.log(i)
// }

// console.log("script end")


// function returning promise  -----------------------------


// function ricePromise(){
//     const bucket = ["coffee", "chips", "vegetables", "salt", "rice"]

//     return new Promise((res,rej)=>{
//             if(bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")){
//                 res("fried rice")
//             }else{
//                 rej("couldn't do it")
//             }
//         })
// }



// ricePromise().then(
//     // jab promise resolve hoga
//     (myfriedRice)=>{
//     console.log("lets eat ", myfriedRice)
//     }
  
// ).catch((error)=>{
//     console.log(error)
// })

// promise && setTimeout-------------------

// function myPromise(){
    
//     return new Promise((res,rej)=>{
//         const value = true
//         setTimeout(()=>{
//             if(value){
//                 res("resolved promise")
//             }else{
//                 rej("reject promise")
//             }
//         },2000)

//     })
// }

// myPromise()
//       .then((res)=>{console.log(res)})
//       .catch((rej)=>{console.log(rej)})

// promise resolve -------------------
// promise chaining--------------------

// const myPromise = Promise.resolve(5)
// myPromise.then((value)=>{
//     console.log(value)
// })

// then() 
// then method hmesha promise return krta h 

// function myPromise(){
//     return new Promise((res,rej)=>{
//         res("foo")
//     })
// }

// myPromise()
//     .then((value)=>{
//       console.log(value)
//       value += "baar"
//       return value
// })
// .then((value)=>{
//     console.log(value)
// })

// solve callback hell by promise----------------------------


// function changeText(element, text, color, time){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             if(element){
//               element.textContent = text
//               element.style.color = color
//               res()
//             }else(
//                 rej("element not found")
//             )
          
//         },time)
//     })
// }



// changeText(heading1, "one", "red", 1000)
// .then(()=>changeText(heading2, "two", "red", 1000))
// .then(()=>changeText(heading3, "three", "green", 1000) )
// .then(()=>changeText(heading4, "four", "pink", 1000) )
// .then(()=>changeText(heading5, "five", "orange", 1000))
// .then(()=>changeText(heading6, "six", "black", 1000))
// .then(()=>changeText(heading7, "seven", "blue", 1000))
// .then(()=>changeText(heading8, "eight", "sky", 1000))
// .then(()=>changeText(heading9, "nine", "yellow", 1000))
// .then(()=>changeText(heading10, "ten", "red", 1000))
// .catch((error)=>{
//     alert(error)
// })


