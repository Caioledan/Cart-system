/*    TO-DO functions:
    1. Add Item ✅
    2. Remove Item
    3. Delete Item ✅
    4. Calculate total ✅
    5. Display cart ✅
    6. Finalize order
*/

async function addItem(userCart, item) {
    userCart.push(item);
}

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

async function deleteItem(userCart, itemName) {
    const index = userCart.findIndex((index) => index.name === itemName);

    if (index !== -1){
        userCart.splice(index, 1);
    }
}

async function calculateTotal(userCart) {
   return userCart.reduce((total, item) => total + item.subtotal(), 0);
}

async function displayCart(userCart) {
    console.log("🛒 Your cart: \n");
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - $${item.price} | ${item.quantity} | Subtotal = $${item.subtotal()}`);
    })
}

async function finalizeOrder(params) {
    
}


export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
    finalizeOrder,
    displayCart,
}