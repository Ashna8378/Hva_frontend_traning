/ Promises ------------------------------------------------------------------------------

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


function changeText(element, text, color, time){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            if(element){
              element.textContent = text
              element.style.color = color
              res()
            }else(
                rej("element not found")
            )
          
        },time)
    })
}



changeText(heading1, "one", "red", 1000)
.then(()=>changeText(heading2, "two", "red", 1000))
.then(()=>changeText(heading3, "three", "green", 1000) )
.then(()=>changeText(heading4, "four", "pink", 1000) )
.then(()=>changeText(heading5, "five", "orange", 1000))
.then(()=>changeText(heading6, "six", "black", 1000))
.then(()=>changeText(heading7, "seven", "blue", 1000))
.then(()=>changeText(heading8, "eight", "sky", 1000))
.then(()=>changeText(heading9, "nine", "yellow", 1000))
.then(()=>changeText(heading10, "ten", "red", 1000))
.catch((error)=>{
    alert(error)
})


