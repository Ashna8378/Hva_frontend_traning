// a. Define the Array of Inventory Items-----------------------------------------------------------------------------------

const inventory = [
    {id:1, name: 'laptop', price: 10, quantity: 2},
    {id:2, name: 'smartphone', price: 50, quantity: 3},
    {id:3, name: 'table', price: 100, quantity: 4},
    {id:4, name: 'chair', price: 80, quantity: 1},
]


// b. Create the Product Class-----------------------------------------------------------------------------------------

class Product {
    constructor(id, name, price, quantity){
        this.id = id
        this.name = name
        this.price = price
        this.quantity = quantity

    }
}


// c. Define the displayProducts Function------------------------------------------------------------------------------------------

function displayProducts(productsArray){
    productsArray.forEach(product => {
        console.log(`${product.name} - $${product.price} (${product.quantity})`)
    })
}

displayProducts(inventory)

// d. Define the addProduct Function------------------------------------------------------------------------------------------

function addProduct(id, name, price, quantity){
    const newProduct = new Product(id, name, price, quantity)
    inventory.push(newProduct)
}


addProduct(5, 'mouse', 400, 6)
displayProducts(inventory)


// e. Define the updateProduct Function----------------------------------------------------------------------------------

function updateProduct(id,newQuantity){
    const product = inventory.find((product)=>{
        return product.id === id
    })

    if(product){
        product.quantity = newQuantity
    }else{
        console.log('Product not found')
    }
}
updateProduct(4, 8)
displayProducts(inventory)

function updateProductWithMap(id, newQuantity){
    inventory.map((product)=>{
        if (product.id === id){
            product.quantity = newQuantity
        }
        return product
    })
}
updateProductWithMap(4, 10)

displayProducts(inventory)


// f. Define the removeProduct Function------------------------------------------------------------------------

function removeProduct(id){
    const updatedInventory = inventory.filter((product)=>{
        return product.id !== id
              
    })
    inventory.push(...updatedInventory)
}


removeProduct(4)
displayProducts(inventory)
















