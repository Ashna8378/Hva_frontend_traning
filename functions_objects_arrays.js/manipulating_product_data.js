// a. Define the Array of Products--------------------------------------------------------------------------------------------------

const products = [
    { id: 1, name: 'Laptop', price: 999.99, category: 'Electronics' },
    { id: 2, name: 'Smartphone', price: 699.99, category: 'Electronics' },
    { id: 3, name: 'Headphones', price: 199.99, category: 'Accessories' },
    { id: 4, name: 'Coffee Maker', price: 49.99, category: 'Home Appliances'}
]



// b. Define the displayProducts Function----------------------------------------------------------------------


// function displayProducts(productsArray){

//     productsArray.forEach((product)=>{
//         console.log(`${product.name} - $${product.price}`)

//     })
// }
// displayProducts(products)


// c. Calculate and DisplayProducts with Tax:

const taxRate = 0.10;

function displayProductsWithTax(productsArray) {
    const productsWithTax = productsArray.map(product => {
        return {
            id: product.id,
            name: product.name,
            category: product.category,
            priceWithTax: product.price * (1 + taxRate)
        };
    });

    productsWithTax.forEach(product => {
        console.log(`${product.name} - $${product.priceWithTax}`);
    });
}

console.log('Products with Tax:')
displayProductsWithTax(products)





















