const fs = require("node:fs");

const readableStream = fs.createReadStream(__filename);
readableStream.close();

readableStream.on("close", () => {
  console.log("Callback from the readableStream close event");
})

setImmediate(() => 
  console.log("Callback from the setImmediate 1")
);

setTimeout(() => 
  console.log("Callback from the setTimeout")
, 0)

Promise.resolve().then(() => {
  console.log("Callback from the promise queue")
})

process.nextTick(() => {
  console.log("Callback from the nextTick Queue")
})
