const fs = require("node:fs/promises");

console.log("File reading asynchronously!")

fs.readFile("file.txt", "utf-8").then((res) => {
  console.log(res)
}).catch((err) => {
  console.log(err)
})

console.log("File reading asynchronously again!")

async function readFileAsynchronously() {
  try {
    const data = await fs.readFile("hello.txt", "utf-8");
    console.log(data)
  } catch(err) {
    console.log(err)
  }
}

readFileAsynchronously()
