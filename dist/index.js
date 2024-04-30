"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
function createUser(name, age) {
    const user = {
        id: (0, uuid_1.v4)(),
        name,
        age,
        cart: []
    };
    return user;
}
function createItem(name, price, description) {
    let item = {
        id: (0, uuid_1.v4)(),
        name,
        price,
        description
    };
    return item;
}
function addToCart(user, item) {
    user.cart.push(item);
}
function removeFromCart(user, item) {
    user.cart.splice(user.cart.indexOf(item), 1);
}
function removeQuantityFromCart(user, item, quantity) {
    while (quantity > 0) {
        user.cart.splice(user.cart.findIndex(i => i.name === item.name), 1);
        quantity--;
    }
}
function cartTotal(user) {
    let total = 0;
    for (let i in user.cart) {
        total += user.cart[i].price;
    }
    return total;
}
function printCart(user) {
    for (let i in user.cart) {
        console.log(user.cart[i]);
    }
}
let omar = createUser('omar', 22);
let itemA = createItem('Tv', 500, 'sony');
let itemB = createItem('laptop', 1000, 'macbook');
let itemC = createItem('pc', 5000, 'xmaster');
addToCart(omar, itemA);
printCart(omar);
console.log(cartTotal(omar));
addToCart(omar, itemB);
addToCart(omar, itemB);
addToCart(omar, itemB);
printCart(omar);
console.log(cartTotal(omar));
addToCart(omar, itemC);
addToCart(omar, itemC);
addToCart(omar, itemC);
printCart(omar);
console.log(cartTotal(omar));
removeFromCart(omar, itemB);
printCart(omar);
console.log(cartTotal(omar));
removeQuantityFromCart(omar, itemC, 2);
printCart(omar);
console.log(cartTotal(omar));
