import { v4 as uuidv4 } from 'uuid';

type Item = {
    id: string
    name: string
    price: number
    description: string
}

type User = {
    id: string
    name: string
    age: number
    cart: Item[]
}

function createUser(name:string, age:number):User{
    const user: User={
        id:uuidv4(),
        name,
        age,
        cart: []
    }
    return user
}

function createItem(name:string, price:number, description:string):Item{
    let item: Item={
        id:uuidv4(),
        name,
        price,
        description
    }
    return item
}

function addToCart(user:User, item:Item):void{
    user.cart.push(item)
}

function removeFromCart(user:User, item:Item):void{
    user.cart.splice(user.cart.indexOf(item),1)
}

function removeQuantityFromCart(user:User, item:Item, quantity:number):void{
    while(quantity > 0){
        user.cart.splice(user.cart.findIndex(i => i.name === item.name) , 1)
        quantity--
    }
}

function cartTotal(user:User):number{
    let total = 0
    for (let i in user.cart){
        total += user.cart[i].price
    }
    return total
}

function printCart(user:User):void{
    for (let i in user.cart){
        console.log(user.cart[i])
    }
}


let omar = createUser('omar', 22)
let itemA = createItem('Tv',500,'sony')
let itemB = createItem('laptop',1000,'macbook')
let itemC = createItem('pc',5000,'xmaster')


addToCart(omar, itemA)
printCart(omar)
console.log(cartTotal(omar))


addToCart(omar, itemB)
addToCart(omar, itemB)
addToCart(omar, itemB)
printCart(omar)
console.log(cartTotal(omar))


addToCart(omar,itemC)
addToCart(omar,itemC)
addToCart(omar,itemC)
printCart(omar)
console.log(cartTotal(omar))


removeFromCart(omar, itemB)
printCart(omar)
console.log(cartTotal(omar))


removeQuantityFromCart(omar, itemC, 2)
printCart(omar)
console.log(cartTotal(omar))