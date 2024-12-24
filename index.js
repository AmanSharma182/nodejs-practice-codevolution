const path = require("node:path")

// to get the path of the current file
console.log(__filename)
// to get the path of the directory of the current file
console.log(__dirname)

// to get the last segment of the path of the file
console.log(path.basename(__filename))
// to get the last segment of the path of the directory
console.log(path.basename(__dirname))

// to get the file extension
console.log(path.extname(__filename))
// to get the directory extension
console.log(path.extname(__dirname))

// to parse the path string into the object
console.log(path.parse(__filename))
// to stringify an object into the path string
console.log(path.format(path.parse(__filename)))

// to check if the file path is absolute or not
console.log(path.isAbsolute(__filename))
console.log(path.isAbsolute("./data.json"))

// to create a path using multiple strings arguments
console.log(path.join("folder1", "folder2", "index.html"))
console.log(path.join("/folder1", "folder2", "index.html"))
console.log(path.join("/folder1", "//folder2", "index.html"))
console.log(path.join("/folder1", "//folder2", "../index.html"))
console.log(path.join(__dirname, "data.json"))

// to resolve a path using multiple strings arguments
console.log(path.resolve("folder1", "folder2", "index.html"))
console.log(path.resolve("/folder1", "folder2", "index.html"))
console.log(path.resolve("/folder1", "//folder2", "index.html"))
console.log(path.resolve("/folder1", "//folder2", "../index.html"))
console.log(path.resolve(__dirname, "data.json"))