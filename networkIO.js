const https = require("node:https");

const maxCalls = 4;
const startTime = Date.now();

for (let i = 0; i < maxCalls; i++) {
  https.request("https://www.google.com", (res) => {
    res.on("data", () => {});
    res.on("end", () => {
      console.log(`Request: ${i + 1}`, Date.now() - startTime);
    })
  }).end();
}