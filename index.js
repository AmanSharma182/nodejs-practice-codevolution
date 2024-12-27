const PizzaShop = require("./pizza-shop");
const DrinkMachine = require("./drink-machine");

const pizzaShop = new PizzaShop();
const drinkMachine = new DrinkMachine();

pizzaShop.on("order-pizza", (size, toppings) => {
  console.log(`Order received! Baking a ${size} pizza with ${toppings}`)
  drinkMachine.serveDrink(size);
})

pizzaShop.orderPizza("large", "Tomato");

pizzaShop.displayOrderNumber();