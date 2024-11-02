
// // let fpara = document.getElementById('fpara')

// // console.log(fpara)

// // const fheading = document.getElementById('fheading')

// // console.log(fheading)

// const textMatter = document.getElementsByClassName("textMatter")

// console.log(textMatter)

// const tagname = document.getElementsByTagName('p')
// console.log(tagname)

// const fpara = document.querySelector('#fpara')
// console.log(fpara)

// const text1Matter = document.querySelector('.textMatter')

// console.log(text1Matter)


// dom ------------------------

// console.log(document)

// select element using get element by id 

// const mainHeading = document.getElementById('main-heading')

// console.log(mainHeading)


// console.log(typeof mainHeading)

// change text 
// textContent and innertext-----------------------------


// const mainHeading = document.getElementById('main-heading')
// console.log(mainHeading.textContent)

// mainHeading.textContent = 'this is something else'
// console.log(mainHeading.textContent)


// change the styles of elements --------------

// const mainHeading = document.querySelector('#main-heading')
// mainHeading.style.backgroundColor = 'blue'
// mainHeading.style.border = '2px solid red'

// get and set attribute-------------------

// const link = document.querySelector("a")

// console.log(link.getAttribute("href"))

// link.setAttribute("href", "https://codprog.com")
// console.log(link.getAttribute("href"))

// const inputELement = document.querySelector(".form-todo input")

// console.log(inputELement.getAttribute("type"))


// get multiple elements using getElements by class name----------------------------------
// get multiple elements items using querySelectorAll-------------------------
//  array like object ===> indexing, length property

// const navItem = document.getElementsByClassName("nav-item")   // htmlcollection

// console.log(navItem[1])

// console.log(typeof navItem)

// console.log(Array.isArray(navItem))

  
// const navItems = document.querySelectorAll(".nav-item")    // nodelist
// const navItems = document.getElementsByTagName("a")         // htmlcollection
// console.log(navItems) 
// console.log(navItems[0])

// loop ---------------------

// we can't use forEach method to iterate through HTMLCollection

// simple for loop
// for of loop
// forEach


// for ----------------------------------

// for(let i = 0; i < navItems.length; i++){
//     // console.log(navItems[i])
//     const navItem = navItems[i]
//     navItem.style.backgroundColor = "orange"
//     navItem.style.color = "green"
//     navItem.style.fontWeight = "bold"

// }

// for of --------------------------------------

// for(let navItem of navItems){

//     navItem.style.backgroundColor = "orange"
//     navItem.style.color = "green"
//     navItem.style.fontWeight = "bold"
// }

// queryselectorAll

// let navItems = document.querySelectorAll('a')
// console.log(navItems)

// simple for loop
// for of loop
// forEach

// for(let i = 0; i < navItems.length; i++){
//     const navItem = navItems[i]
//     navItem.style.backgroundColor = "orange"
//     navItem.style.color = "green"
//     navItem.style.fontWeight = "bold"
        
// }


// for(let navItem of navItems){
//     navItem.style.backgroundColor = "orange"
//     navItem.style.color = "green"
//     navItem.style.fontWeight = "bold"
// }


// innerHTML ------------------------------------

// const headline = document.querySelector('.headline')
// // console.log(headline.innerHTML)

// headline.innerHTML = '<h1> Inner html changed </h1>'
// headline.innerHTML += "<button class=\"btn\"> learn more </button>"

// console.log(headline.innerHTML)


// dom traversing ----------------------

// const rootNode = document.getRootNode()
// console.log(rootNode.childNodes)        // nodelist

// const htmlElementNode = rootNode.childNodes[0]
// console.log(htmlElementNode.childNodes)  // nodelist [head, text, body]

// const headElementNode = htmlElementNode.childNodes[0]
// const textNode1 = htmlElementNode.childNodes[1]
// const bodyElementNode = htmlElementNode.childNodes[2]

// console.log(bodyElementNode)
// console.log(textNode1)
// console.log(bodyElementNode)


// console.log(headElementNode.parentNode)
// console.log(headElementNode.nextSibling)
// console.log(headElementNode.nextSibling.nextSibling)
// console.log(headElementNode.nextElementSibling)
// console.log(headElementNode.childNodes)

// sibling relation --------------------

// const h1 = document.querySelector('h1')

// const div = h1.parentNode
// const body = h1.parentNode.parentNode
// body.style.color = "#efefef"
// body.style.backgroundColor = "#333"

// const head = document.querySelector("head")
// console.log("head")
// const title = head.querySelector("title")
// console.log(title)

// childredn ---------------

// const container = document.querySelector(".container")
// console.log(container.children)


