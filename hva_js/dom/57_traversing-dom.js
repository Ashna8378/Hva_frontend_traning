
// b.  Fetch the First <ul> and Iterate Over Its <li> Elements-----------------------------------------


const list1 = document.getElementById('list1')

let currentItem = list1.firstElementChild;

// console.log(currentItem)

while(currentItem){
    console.log(currentItem.textContent)
    currentItem = currentItem.nextElementSibling
}

// c. Fetch the Second <ul> and Iterate Over Its <li> Elements in Reverse Order------------------------------------------

const list2 = document.getElementById("list2")

let lastELementChild = list2.lastElementChild

while(lastELementChild){
    console.log(lastELementChild.textContent)
    lastELementChild = lastELementChild.previousElementSibling

}

// d. Fetch the Third <ul> and Access All <li> Elements---------------------------

const list3 = document.getElementById("list3")

let listItems = list3.children
console.log(listItems)

for(let i = 0; i < listItems.length; i++){
    console.log(listItems[i].textContent)
}

