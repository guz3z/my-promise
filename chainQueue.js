const { orderPizza, waitingAround, eatPizza, complain} = require('./pizzaShop');

//AT THE ORDER COUNTER
const customers = ["Jill", "Maya", "Kim", "Rold", "Bob"];

function placeOrder(customer){
    console.log(`\n${customer} orders a pizza`);

    orderPizza()
        .then(r => eatPizza(r, customer))
        .catch(e => complain(e, customer))
};

for (let c of customers){
    placeOrder(c);
    waitingAround(c);
}