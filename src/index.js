import createItem from "./services/item.js";
import * as cartService from"./services/cart.js";


const myCart = [];

const item1 = await createItem("monitor", 950.50, 3);
const item2 = await createItem("tv monitor", 1052.50, 2);
 await cartService.toAddItem(myCart, item1);
 await cartService.toAddItem(myCart, item2);

 console.log(" mostrar o display");
// await cartService.calculateTotal(myCart);
await cartService.calculateTotal(myCart);

console.log(" \n remover um item")
await cartService.removeItem(myCart,item1)
await cartService.calculateTotal(myCart);


// await cartService.deleteItem(myCart, item.name);

 //console.log(" total do carrinho apos o delete");
 