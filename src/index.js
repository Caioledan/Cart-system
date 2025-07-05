import createItem from "./services/item.js";
import * as cartService from "./services/cart.js"

const cart = [];

const item1 = await createItem("mouse", 99.99, 1);
const item2 = await createItem("mousepad", 19.99, 3)

await cartService.addItem(cart, item1);
await cartService.addItem(cart, item2);

await cartService.removeItem(cart, item2);

await cartService.displayCart(cart);
console.log("\n💵 Total of the cart: $" + await cartService.calculateTotal(cart));