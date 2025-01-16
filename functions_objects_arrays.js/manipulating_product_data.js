// a. Define the Array of Products--------------------------------------------------------------------------------------------------

const products = [
    { id: 1, name: 'Banana', price: 50, category: 'Food' },
    { id: 2, name: 'Phone', price: 1000, category: 'Electronics' },
    { id: 3, name: 'Apple', price: 10, category: 'Food' },
    { id: 4, name: 'Cooler', price: 500, category: 'Electronics' }
];

// b. Define the displayProducts Function----------------------------------------------------------------------

function displayProducts(productsArray) {
    productsArray.forEach((product) => {
        console.log(`${product.name} - $${product.price}`);
    });
}

displayProducts(products);

// c. Calculate and Display Products with Tax---------------------------------------------------------------------------------

const taxRate = 0.10;

const productsWithTax = products.map(product => {
    return {
        id: product.id,
        name: product.name,
        category: product.category,
        priceWithTax: product.price + (product.price * taxRate) 
    };
});

console.log("Products with Tax:");
displayProducts(productsWithTax.map(product => ({ name: product.name, price: product.priceWithTax })));

// d. Filter and Display Food Products----------------------------------------------------------------------------------

const foodProducts = products.filter(product => product.category === 'Food');

console.log("Food Products:");
displayProducts(foodProducts);

// e. Find and Display Affordable Products----------------------------------------

const affordableProducts = products.filter(product => product.price < 100);

const affordableProductsStrings = affordableProducts.map(product => `${product.name} - $${product.price}`);

console.log("Affordable Products:");
console.log(affordableProductsStrings);

// f. Calculate Total Price-----------------------------------------------------------------------

let totalPrice = 0;
products.forEach(product => {
    totalPrice += product.price;
});
console.log(`Total Price: $${totalPrice}`);
