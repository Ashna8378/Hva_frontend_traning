// a. Define the Array of Products--------------------------------------------------------------------------------------------------

const products = [
    { id: 1, name: 'Banana', price: 50, category: 'food' },
    { id: 2, name: 'phone', price: 1000, category: 'Electronics' },
    { id: 3, name: 'Apple', price: 10, category: 'food' },
    { id: 4, name: 'cooler', price: 500, category: 'Electronics'}
]



// b. Define the displayProducts Function----------------------------------------------------------------------


// function displayProducts(productsArray){

//     productsArray.forEach((product)=>{
//         console.log(`${product.name} - $${product.price}`)

//     })
// }
// displayProducts(products)


// c. Calculate and DisplayProducts with Tax---------------------------------------------------------------------------------

// const taxRate = 0.10;

// const productsWithTax = products.map(product => {
//     return {
//         id: product.id,
//         name: product.name,
//         category: product.category,
//         priceWithTax: product.price + (product.price * taxRate)
//     };
// });


// console.log(productsWithTax)
// productsWithTax.forEach(product => {
//     console.log(`${product.name} - $${product.priceWithTax}`);
// });

// d. Filter and Display Food Products----------------------------------------------------------------------------------

// const foodProducts = products.filter((product)=>{
//     return product.category === 'food'
// });

// foodProducts.forEach(product => {
//     console.log(`${product.name} - $${product.price}`);
// });


// e. Filter and Display Food Products----------------------------------------


// const affordableProducts = products.filter((product)=>{
//     return product.price < 100
// })

// const affordableProductsStrings = affordableProducts.map((product)=>{
//     return `${product.name} $${product.price}`
// })

// console.log(affordableProducts)

// console.log(affordableProductsStrings)

// f. Calculate Total Price-----------------------------------------------------------------------

// totalPrice = 0
// products.forEach((product)=>{
//       totalPrice += product.price
// })
// console.log(totalPrice)

























