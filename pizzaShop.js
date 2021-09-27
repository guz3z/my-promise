
// PROMISE
const orderPizza = () => new Promise(makePizza);


// STAFF AND CUSTOMER BEHAVIOUR
// const eatPizza
const eatPizza = ({pizza}, customer) => {
    console.log(`${customer} is now eating`);
}

// const doSomethingWhileWaiting
const waitingAround = (customer) => {
    console.log(`${customer} is waiting for their order`)
};

// const complain
const complain = ({message}, customer) => {
    console.log(`${customer} screams: "I still want my order. I do not care that you are ${message}"`)
};


// IN THE KITCHEN
// const makePizza
let specialPizzaLeft = 4;

function makePizza(resolve, reject) {
    console.log("Putting in order");
    if(specialPizzaLeft >= 1) {
        //makePizza
        const Pizza = { Pizza: ["Dough", "sauce", "toppings"], bill: 9.99};
        specialPizzaLeft--
        setTimeout(() => {
            console.log("Pizza Here!");
            resolve(Pizza);
        }, 10000)
    } else {
        const error = { message: "out of special Pizza"};
        setTimeout(() => {
            console.log("Out of specials!");
            reject(error);
        }, 1000)
    }
};

//THANK YOU FOR VISITING
module.exports = {orderPizza, waitingAround, eatPizza, complain}