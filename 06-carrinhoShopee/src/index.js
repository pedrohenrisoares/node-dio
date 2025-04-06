import createItem from "./services/item.js";
import * as cartService from "./services/cart.js";

const myCart = [];
const myWishList = [];

console.log("Welcome to your Shopee Cart!");

const item1 = await createItem("Hotwheels Ferrari", 20.99, 7);
const item2 = await createItem("Hotwheels Lamborghini", 39.99, 3);

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

await cartService.removeItem(myCart, item2);

await cartService.displayCart(myCart);

console.log("\nShopee Cart Total:");

// await cartService.deleteItem(myCart, item1.name);
await cartService.calculateTotal(myCart);
