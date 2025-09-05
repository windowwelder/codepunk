const menu = [
    { name: "Margherita", price: 8 },
    { name: "Pepperoni", price: 10 },
    { name: "Hawaiian", price: 10 },
    { name: "Veggie", price: 9 },
]

let cashInRegister = 100
const orderQueue = []

function addNewPizza(pizzaObj) {
    menu.push(pizzaObj)
}

function placeOrder(pizzaObjName) {
    const selectedPizza = menu.find( pizza => pizza.name === pizzaObjName )
    cashInRegister = cashInRegister + selectedPizza.price;
    const newOrderObject = {pizza: selectedPizza, status: "ordered"};
    orderQueue.push(newOrderObject)
    return newOrderObject
}

function completeOrder(orderId) {
    const selectedOrder = orderQueue.find( order => order.orderId === orderId );
    selectedOrder.status = "completed";
    return selectedOrder
}