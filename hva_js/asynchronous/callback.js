// synchronous programming vs asynchronous programming 

// synchronous programming 

// js is a synchrounous programming and single threaded language 

// console.log("script start")

// for(let i = 0; i< 1000; i++){
//     console.log("inside for loop")
// }

// console.log("script end")

// setTimeout 

// console.log("Script start")


// const id = setTimeout(()=>{
//     console.log("inside settime out")
// },1000)

// for(let i = 0; i < 100; i++){
//     console.log("...")
// }

// console.log("settimeout id is ", id)
// console.log("clearing time out")
// clearTimeout(id)

// console.log("script end")


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

// Callbacks

// A callback is simply a function passed as an argument to another function, 
// which is then executed after some operation is complete. This allows for asynchronous behavior—
// where code doesn’t wait for the operation to finish before moving to the next line.

// Why Use Callbacks?

// In JavaScript, many operations (like fetching data, reading files, etc.) are asynchronous. 
// This means they take some time to complete, but instead of stopping everything to wait, 
// JavaScript moves on to the next task. However, you often need to run some code only after the asynchronous task finishes.
// This is where callbacks come in

// asynchronous programming

const heading1 = document.querySelector(".heading1")
const heading2 = document.querySelector(".heading")
const heading3 = document.querySelector(".heading3")
const heading4 = document.querySelector(".heading4")
const heading5 = document.querySelector(".heading5")
const heading6 = document.querySelector(".heading6")
const heading7 = document.querySelector(".heading7")
const heading8 = document.querySelector(".heading8")
const heading9 = document.querySelector(".heading9")
const heading10 = document.querySelector(".heading10")

setTimeout(()=>{
     heading1.textContent = "one"
     heading1.style.color = "violet"
     setTimeout(()=>{
        heading2.textContent = "two"
        heading2.style.color = "purple"
        setTimeout(()=>{
            heading3.textContent = "three"
            heading3.style.color = "red"
            setTimeout(()=>{
                heading4.textContent = "four"
                heading4.style.color = "red"
                setTimeout(()=>{
                    heading5.textContent = "five"
                    heading5.style.color = "green"
                
                },2000)
            
            },1000)
        
        },2000)
    
    },2000)
},1000)


// function example 



function changeText(element, text, color, time,onSuccessCallback,onFailureCallback){
    setTimeout(()=>{
        if(element){
            element.textContent = text
            element.style.color = color
            if(onSuccessCallback){
                onSuccessCallback()

            }else{
                if(onFailureCallback){
                    onFailureCallback()
                }
            }

        }else{
            console.log("your element doesn't exist")
        }
    
    },time)
}



changeText(heading1, "one", "green", 1000, ()=>{
    changeText(heading2, "two", "red", 2000, ()=>{
        changeText(heading3, "three", "violet", 1000, ()=>{
            changeText(heading4, "four", "pink", 1000, ()=>{
                changeText(heading5, "five", "blue", 1000, ()=>{
                    changeText(heading6, "six", "purple", 1000, ()=>{
                        changeText(heading7, "seven", "yellow", 1000, ()=>{
                            changeText(heading8, "eight", "brown", 1000, ()=>{
                                changeText(heading9, "nine", "orange", 1000, ()=>{
                                    changeText(heading10, "ten", "black", 1000, ()=>{
                                
                                    },()=>(console.log("heading10 doesn't exist")))
                                },()=>(console.log("heading9 doesn't exist")))
                            },()=>(console.log("heading8 doesn't exist")))
                        },()=>(console.log("heading7 doesn't exist")))
                    },()=>(console.log("heading6 doesn't exist")))
                },()=>(console.log("heading5 doesn't exist")))
            },()=>(console.log("heading4 doesn't exist")))
        },()=>(console.log("heading3 doesn't exist")))
    },()=>(console.log("heading2 doesn't exist")))
},()=>(console.log("heading1 doesn't exist")))

// this is called callback hell can considered pyramid of doom
