const fs = require("node:fs");

console.log("First");
const fileContent = fs.readFileSync("./file.txt", "utf-8");
console.log(fileContent);

console.log("Second");

fs.readFile("./file.txt", "utf-8", (error, data) => {
  if(error) {
    console.log(error);
  } else {
    console.log("File Data:", data);
  }
});

console.log("Third");

fs.writeFileSync("./hello.txt", "Hello Everyone! I am learning Node.js!");
console.log("File created synchronously!")

fs.writeFile("./hello.txt", " Hello Again! I just wrote in this file asynchronously!", {flag: "a"}, (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log("File written successfully!")
  }
})