const http = require("node:http")

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/plain"
  })
  res.end("My first servers");
})

server.listen(3000, () => {
  console.log("Serving runing on port 3000");
});