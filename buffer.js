const buffer = new Buffer.from("AmanSharma")

console.log(buffer.toString())
console.log(buffer)
console.log(buffer.toJSON())

buffer.write("NodePractice");

console.log(buffer.toString())