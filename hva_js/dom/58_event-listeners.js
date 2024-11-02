
// b. Create a Button with a Click Event Listener:-------------


const button = document.querySelector('button')

button.addEventListener('click',()=>{
    console.log('Button click event executed')
})


// c. Create a <div> with a Mouseover Event Listener:--------------------

const div = document.querySelector('div')

div.addEventListener('mouseover',()=>{
    console.log("Mouseover event on div executed")
})

// Create an Input Element with an Input Event Listener:----------------------

const input = document.querySelector('input')

console.log(input)

input.addEventListener('input',()=>{
    console.log('Input event executed');
})

