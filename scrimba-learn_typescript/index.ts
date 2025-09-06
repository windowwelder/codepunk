type Pizza = {
    name: string,
    price: number
}

type Menu = {
    name: string,
    price: number
}

const menu = [
    { name: "Margherita", price: 8 },
    { name: "Pepperoni", price: 10 },
    { name: "Hawaiian", price: 10 },
    { name: "Veggie", price: 9 },
]

type Order = {
    id: number,
    pizza: Menu,
    status: "ordered" | "completed"
}

let cashInRegister = 100
let nextOrderId: number = 1
const orderQueue: Order[] = []

function addNewPizza(pizzaObj: Menu) {
    menu.push(pizzaObj)
}

function placeOrder(pizzaName: string): Order | null {
    const selectedPizza = menu.find( pizza => pizza.name === pizzaName )
    if (!selectedPizza) {
        console.error(`${pizzaName} does not exist in the menu`)
        return null
    }
    cashInRegister += selectedPizza.price;
    const newOrder: Order = { id: nextOrderId++, pizza: selectedPizza, status: "ordered" }
    orderQueue.push(newOrder)
    return newOrder
}

function completeOrder(orderId: number): Order | null {
    const order = orderQueue.find(order => order.id === orderId)
    if (order) {
        order.status = "completed"
        return order
    } else {
        return null
    }
}

function getPizzaDetail(identifier: string | number ): Pizza | undefined {
    if (typeof identifier === "string") {
        return menu.find( pizza => pizza.name.toLowerCase() === identifier.toLowerCase() )
    }
    else if (typeof identifier === "number") {
        return menu.find( pizza => pizza.id === identifier)
    }
    else {
        console.error("the variable passed to getPizzaDetail neither string nor number")
        return 
    }
}

addNewPizza({ name: "Chicken Bacon Ranch", price: 12 })
addNewPizza({ name: "BBQ Chicken", price: 12 })
addNewPizza({ name: "Spicy Sausage", price: 11 })

placeOrder("Chicken Bacon Ranch")
completeOrder(1)

console.log("Menu:", menu)
console.log("Cash in register:", cashInRegister)
console.log("Order queue:", orderQueue)