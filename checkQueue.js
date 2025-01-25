const fs = require("node:fs");

setTimeout(() => 
  console.log("Callback from the setTimeout")
, 0)

setImmediate(() => 
  console.log("Callback from the setImmediate 1")
);

  // setImmediate(() => 
  //   console.log("Callback from the setImmediate 1")
  // );

  // setImmediate(() => {
  //   console.log("Callback from the setImmediate 2");
  //   process.nextTick(() => {
  //     console.log("Callback from the nextTick Queue inside setImmediate 2")
  //   })

  //   Promise.resolve().then(() => {
  //     console.log("Callback from the promise queue inside setImmediate 2")
  //   })
  // });

  // setImmediate(() => 
  //   console.log("Callback from the setImmediate 3")
  // );


// fs.readFile(__filename, () => {
//   console.log("Callback from the IO Queue");
//   setImmediate(() => 
//     console.log("Inner Callback from the setImmediate inside the I/O Queue")
//   );

//   process.nextTick(() => {
//     console.log("Inner Callback from the nextTick Queue inside I/O Queue")
//   })
  
//   Promise.resolve().then(() => {
//     console.log("Inner Callback from the promise queue inside I/O Queue")
//   })
// })

// process.nextTick(() => {
//   console.log("Callback from the nextTick Queue")
// })

// Promise.resolve().then(() => {
//   console.log("Callback from the promise queue")
// })

// setTimeout(() => 
//   console.log("Callback from the setTimeout")
// , 0)