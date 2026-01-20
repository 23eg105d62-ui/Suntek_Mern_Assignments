//You are building a shopping cart summary for an e-commerce website.

//Test Data : 
const cart = [
    { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
    { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
    { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
    { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

//Use filter() to get only inStock products
let inst = cart.filter(cartObject => cartObject.inStock)
console.log(inst);
//Use map() to create a new array with:  { name, totalPrice }
let cartMap = cart.map(cartObject => {
    return {
        name: cartObject.name,
        totalPrice: cartObject.price * cartObject.quantity
    }
})
console.log(cartMap);
//Use reduce() to calculate grand total cart value
let grandTotal = cart.reduce((acc, cartObject) => acc + cartObject.price * cartObject.quantity, 0)
console.log(grandTotal);
//Use find() to get details of "Mouse"
let mouse = cart.find(cartObject => cartObject.name === "Mouse")
console.log(mouse);
//Use findIndex() to find the position of "Keyboard"
let keyboardIdx = cart.findIndex(cartObject => cartObject.name === "Keyboard")
console.log(keyboardIdx);

