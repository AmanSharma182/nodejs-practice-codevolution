const EventEmmiter = require("node:events");

class PizzaShop extends EventEmmiter {
  constructor() {
    super();
    this.orderNumber = 0;
  }

  orderPizza(size, toppings) {
    this.orderNumber++;
    this.emit("order-pizza", size, toppings)
  }

  displayOrderNumber() {
    console.log(`Current Order Number is: ${this.orderNumber}`)
  }
}

module.exports = PizzaShop;