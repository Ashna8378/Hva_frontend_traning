// Handle Form Submission with preventDefault()----------------------


// const myForm = document.getElementById("myForm")

// myForm.addEventListener("submit", (e)=>{
//      e.preventDefault()
//      console.log("form submitted")
// })



// Toggle Background Color of <div> Elements----------------------------------

// const divs = document.querySelectorAll("div")
// console.log(divs)

// divs.forEach((div)=>{
//     div.addEventListener("click",()=>{
//         if (div.style.backgroundColor === "red") {
//             div.style.backgroundColor = "green";
//         } else {
//             div.style.backgroundColor = "red";
//         }
//     })
// })


// Change Background Color Using Buttons--------------------



// Select the colorBox element---------------------------------------

const colorBox = document.querySelector(".colorBox");

// Select all buttons with data-color attributes
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const color = button.getAttribute("data-color");

        colorBox.style.backgroundColor = color;
    });
});
