// a. Define the Array of Cart Items---------------------------------------------------------------------------

const cart = [
    {name: "Apple", price: 0.99, quantity:3},
    {name: "Banana", price: 0.95, quantity:5},
    {name: "Orange", price: 1.29, quantity:2},
    {name: "Milk", price: 2.49, quantity:1},
]


// b. Define the calculateTotalPrice Function Using forEach--------------------------------------------------------
function calculateTotalPrice(cart){
    let totalPrice = 0
    cart.forEach((cart)=>{
        totalPrice +=cart.price * cart.quantity
      })
    return totalPrice   
}


// c. Call the calculateTotalPrice Function:

const totalPrice = calculateTotalPrice(cart)

console.log(totalPrice)









