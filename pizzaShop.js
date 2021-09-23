// create promise
const orderPizza = () => new Promise(makePizza);

// const eatPizza
const eatPizza = (customer, pizza) => {
    console.log(`${customer} says: "Yummy in my tummy. This is my favourite ${pizza}"`)
}

// const doSomethingWhileWaiting
const waitingAround = (customer) => {
    console.log(`${customer} is waiting for their order`)
};


// const complain
const complain = (issue) => {
    console.log(`"It is not my fault that ${issue}`)
};


// const makePizza
let specialPizzaLeft = 4;

const makePizza = (resolve, reject) => {
    if(specialPizzaLeft > 0) {
        //makePizza
        resolve() //send Pizza to customer
    }
}