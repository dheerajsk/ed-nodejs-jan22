// Step 1: Import fs module

const fs = require("fs");

const data = fs.readFileSync("content.txt");

console.log(data.toString());
console.log("Program completed");
