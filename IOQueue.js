const fs = require("node:fs");

fs.readFile(__filename, () => {
  console.log("Callback from the IO Queue");
})

process.nextTick(() => {
  console.log("Callback from the nextTick Queue")
})

Promise.resolve().then(() => {
  console.log("Callback from the promise queue")
})

setTimeout(() => 
  console.log("Callback from the setTimeout")
, 0)

// setTimeout(() => 
//   console.log("Callback from the setTimeout")
// , 0)

// fs.readFile(__filename, () => {
//   console.log("Callback from the IO Queue");
// })

// fs.readFile(__filename, () => {
//   console.log("Callback from the IO Queue");
// })

// process.nextTick(() => {
//   console.log("Callback from the nextTick Queue")
// })

// Promise.resolve().then(() => {
//   console.log("Callback from the promise queue")
// })