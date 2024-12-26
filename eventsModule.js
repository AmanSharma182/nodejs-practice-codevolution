const EventEmitter = require("node:events");

const emitter = new EventEmitter();

emitter.on("baking-pizza", (size, topping) => {
  console.log(`Order received! Baking a ${size} with ${topping}`)
})

emitter.on("baking-pizza", (size, topping) => {
  if(size === "large") {
    console.log(`Serving complementary drinks!`)
  }
})

console.log("Do some work before event occurs in the system!")

emitter.emit("baking-pizza", "large", "Capsicum");