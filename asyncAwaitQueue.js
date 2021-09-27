const { orderPizza, waitingAround, eatPizza, complain} = require('./pizzaShop');

//AT THE ORDER COOUNTER
const customers = ["Jill", "Maya", "Kim", "Rold", "Bob"];

async function placeOrder(customer) {
    try {
        console.log(`\n${customer} orders a pizza`)
        const order = await orderPizza()
        eatPizza(order, customer)
    } catch (e) {
        complain(e,  customer)
    }
};

for (let c of customers){
    placeOrder(c);
    waitingAround(c);
}