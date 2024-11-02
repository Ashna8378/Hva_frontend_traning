
// Dynamically Create and Add <li> Items to the <ul>:

function addListItem(){
    const list = document.getElementById("list")
    // console.log(list)
    const newItem = document.createElement("li")
    // console.log(newItem)

    const itemCount = list.getElementsByTagName("li").length ;

    console.log(itemCount)

    newItem.textContent = `New Item ${itemCount}`;

    list.appendChild(newItem)
}

// addListItem()


// Remove the Last <li> Element:


function removeLastListItem(){
    const list = document.getElementById("list")
    // console.log(list)
    
    if(list.lastElementChild){
        list.removeChild(list.lastElementChild)
    }
}

// removeLastListItem()

const addButton = document.getElementById("addButton")

addButton.addEventListener("click", addListItem)

const removeButton = document.getElementById("removeButton")


removeButton.addEventListener("click", removeLastListItem)

