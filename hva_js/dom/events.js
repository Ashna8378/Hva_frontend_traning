// intro to events 
// click 
// event add karne ke 3 tarike h 

// 1. 

// const btn = document.querySelector(".btn-headline")
// console.log(btn)

// btn.onclick = function(){
//     console.log("uh clicked me")
// }


// 3. method --- addEventListener

// function clickMe(){
//     console.log("you clicked me !!!")
// }


// btn.addEventListener("click", function(){
//     console.log("you clicked me !!!")
    
// })

// btn.addEventListener("click", ()=>{
//     console.log("you clicked me !!!")
   
// })
// btn.addEventListener("click",()=>{
//     console.log("you clicked me arrow func!!")
// })

// this keyword-------------------------------------

// btn.addEventListener("click", ()=>{
//     console.log("you clicked me !!!")
//     console.log("value of this")
//     console.log(this)
// })


// btn.addEventListener("click", function(){
//     console.log("you clicked me !!!")
//     console.log("value of this")
//     console.log(this)
// })

// three button-------------------

// const allButtons = document.querySelectorAll(".my-buttons button")

// console.log(allButtons)

// for(let button of allButtons){
//     button.addEventListener("click",function(){
//         console.log("you clicked me !!!")
//         console.log(this)
//     } )

// }

// for (let i = 0; i < allButtons.length; i++){
//     allButtons[i].addEventListener("click", function(){
//         console.log(this)
//         console.log("uh clicked ")
//     })
// }

// allButtons.forEach(function(button){
//     button.addEventListener("click", function(){
//         console.log(this)
//     })
// })



// firstButton.addEventListener("click", function(){
//     console.log("you clicked me ")
// })

// event object ------------------------

// const firstButton = document.querySelector("#one")

// firstButton.addEventListener("click", function(event){
//     console.log(event)
//     console.log(this)
// })

// jab bhi mai kisi bhi element pe event listener add hoga 
// js engin --- line by line execute karta hai
// browser --- js engine + extra features
// browser --- js engin + web api 

// js browser ko pta chala ki user ne event perform kia 
// jo hum listen kar rahe hai 

// browser ---- 2
// 1.) callback function hai vo js engine ko degi....
// 2.) callback function ke sath browser jo event hua hai uski information bhi dega 
// ye info hamein ek object ke form mai milegi 



// const allButtons = document.querySelectorAll(".my-buttons button")

// for(let button of allButtons){
//     button.addEventListener("click", function(e){
//         console.log(e)
//         console.log(e.target)
//         console.log(e.currentTarget)



//         // console.log(this.textContent)
//     })
// }

// behind the scene  ----------------

// const allButtons = document.querySelectorAll(".my-buttons button")

// console.log("script start !!!")

// allButtons.forEach((button)=>{
//     button.addEventListener("click", (e)=>{
//         let num = 0
//         for(let i = 0; i <= 1000000000; i++){
//             num = num + 1
//         }
//         console.log(e.currentTarget.textContent, num)

//     })
// })

// let outerVar = 0
// for(let i = 0; i<= 100000000; i++){
//     outerVar += i
// }
// console.log("value of outer variable is ", outerVar)

// console.log("script end !!!")


// little practice with click event

// const allButtons = document.querySelectorAll(".my-buttons button")

// console.log(allButtons.length)

// allButtons.forEach((button) =>{
//     button.addEventListener("click", (e)=>{
//         console.log(e.target)
//         e.target.style.backgroundColor = "yellow"
//         e.target.style.color = '#333'
//     })
// })

// keypress event 
// mouseover event 

// const body = document.body
// body.addEventListener("keypress", (e)=>{
//     console.log(e.key)
// })


// const mainButton = document.querySelector(".btn-headline")

// console.log(mainButton)

// mainButton.addEventListener("mouseover", ()=>{
//     console.log("mouseover event occured !!!")
// })


// mainButton.addEventListener("mouseleave", ()=>{
//     console.log("mouseleave event occured")
// })


// event bubbling / event propagation
// event capturing 
// event delegation



console.log("hello world")

const grandparent = document.querySelector(".grandparent")
// const parent = document.querySelector(".parent")
// const child = document.querySelector(".child")

// event bubbling 

// child.addEventListener("click", ()=>{
//     console.log("bubble child")
// })

// parent.addEventListener("click", ()=>{
//     console.log(" bubble parent")
// })

// grandparent.addEventListener("click", ()=>{
//     console.log("bubble grandparent")
// })

// document.body.addEventListener("click", ()=>{
//     console.log("bubble body")
// })

// event captuirng 



// child.addEventListener("click", ()=>{
//     console.log("capture !!! child")
// },true)

// parent.addEventListener("click", ()=>{
//     console.log("capture !!! parent")
// },true)

// grandparent.addEventListener("click", ()=>{
//     console.log("capture !!! grandparent")
// },true)

// document.body.addEventListener("click", ()=>{
//     console.log("capture !!! body")
// },true)


// event delegation 

grandparent.addEventListener("click", (e)=>{
    console.log("you clicked something !!")
    console.log(e.target)
})


// document.createElement()
// append 
// prepend
// remove 

const newTodoItem = document.createElement