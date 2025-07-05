/*    TO-DO functions:
    1. Add Item ✅
    2. Remove Item ✅
    3. Delete Item ✅
    4. Calculate total ✅
    5. Display cart ✅
*/

/// Function to add an item on the cart
async function addItem(userCart, item) {
    userCart.push(item);
}

// Function to remove one item from the cart
async function removeItem(userCart, item) {
    const indexFound = userCart.findIndex((product) => product.name === item.name);

    if (indexFound === -1){
        return;
    }

    if (userCart[indexFound].quantity > 1){
        userCart[indexFound].quantity -= 1;
        return;
    }
    else if (userCart[indexFound].quantity === 1){
        userCart.splice(indexFound, 1);
        return;
    }
}

// Function to completely remove an item from the cart
async function deleteItem(userCart, itemName) {
    const index = userCart.findIndex((index) => index.name === itemName);

    if (index !== -1){
        userCart.splice(index, 1);
    }
}

// Function to calculate the total price of the cart
async function calculateTotal(userCart) {
   return userCart.reduce((total, item) => total + item.subtotal(), 0);
}

// Function to display the cart on the terminal
async function displayCart(userCart) {
    console.log("🛒 Your cart: \n");
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - $${item.price} | ${item.quantity} | Subtotal = $${item.subtotal()}`);
    })
}

// Exports
export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
    finalizeOrder,
    displayCart,
}