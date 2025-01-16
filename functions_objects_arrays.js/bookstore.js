// a. Define the Array of Inventory Items--------------------------------------------------------------------------

let inventory = [
    {id: 1, title: "html is easy", author: 'john', price:400, quantity: 4},
    {id: 2, title: "chhota bheem", author: 'george', price:500, quantity: 8},
    {id: 3, title: "Doremon", author: 'scott', price:600, quantity: 32},
    {id: 4, title: "chinchan", author: 'herman', price:200, quantity: 9},
]

// b. Create the Book Class----------------------------------------------------------------------------------------

class Product {
    constructor(id, title, author, price, quantity ){
     this.id = id,
     this.title = title,
     this.author = author,
     this.price = price,
     this.quantity = quantity
    }
}

// c. Define the displayBooks Function-----------------------------------------------------------------


function displayBooks(){
    inventory.forEach((book)=>{
      console.log(`${book.title} ${book.author} ($${book.price}) - Quantity: ${book.quantity}`)
    })
}

// displayBooks()

// d. Define the addBook Function-------------------------------------------------------------------------------------------------


function addBook(id, title, author, price, quantity){

    const newBook = new Product(id, title, author, price, quantity)
    inventory.push(newBook)
}

addBook(5, 'alien', 'hathim', 500, 6)
// displayBooks()


// e. Define the updateBook Function-----------------------------------------------------------------------

function updateBook(id, newquantity){

    const book = inventory.find((book)=>{
        return book.id === id
    })
    if(book){
        book.quantity = newquantity
    }
    else{
        console.log(`book with the ${id} not found`)
    }
}

function updateBookMap(id, newQuantity){
    inventory.map((book)=>{
        if (book.id == id){
            book.quantity = newQuantity
        }
        return book
    })
}


updateBookMap(3,800)



// f. Define the removeBook Function---------------------------------------------------------------------


function removeBook(id) {
    inventory = inventory.filter((book) => {
       return book.id !== id
    });
}
removeBook(1)


displayBooks()




