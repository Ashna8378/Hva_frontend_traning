
// b. Fetch Elements by ID:

let myDiv = document.getElementById('myDiv')
console.log(myDiv.textContent)

// c. Fetch Elements by Class:

const myclass = document.getElementsByClassName('myClass')

for(let i = 0; i< myclass.length;i++){
    console.log(myclass[i].textContent)
}

// d. Fetch Elements by Tag Name:


let para = document.getElementsByTagName('p')

console.log(para)

for(let i = 0; i< para.length;i++){
    console.log(para[i].textContent)
}

// e. Fetch Elements Using Query Selector All:

const span = document.querySelectorAll('span')

console.log(span)

for(let i = 0; i < span.length; i++){
    console.log(span[i].textContent)
}

// Fetch Elements Using Query Selector:


const firstHighlightSpan = document.querySelector('.highlight')
console.log(firstHighlightSpan.textContent)

