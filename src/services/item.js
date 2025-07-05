/*  TO-DO functions:
    1. Create item ✅
*/ 


async function createItem(name, price, quantity) {
    return {
        name,
        price,
        quantity,
        subtotal: function() {return this.price * this.quantity; }
    }
}

export default createItem;