const crypto = require("node:crypto");

process.env.UV_THREADPOOL_SIZE = 5;

const maxCalls = 6;
const startTime = Date.now();

for (let i = 0; i < maxCalls; i++) {
  crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
    console.log(`Hash: ${i + 1}`, Date.now() - startTime);
  });
}