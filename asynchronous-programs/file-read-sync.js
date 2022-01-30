
// Step 1: Import "fs" (file system)
// Sync.
const fs = require("fs"); 

// Step 2: Read file.
// Sync - processed by main thread
const data = fs.readFileSync("data.txt");
console.log(data.toString());

// sync
console.log("Task 2");

// sync
// Step 3: Print data.
console.log("Task 3");

