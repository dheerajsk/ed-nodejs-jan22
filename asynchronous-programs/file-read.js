// Step 1: Import "fs" (file system)
// Sync.
const fs = require("fs"); 
var dataFromFile;

// Sync
const printDataFunction = function printData(err, data){
    if(err){
        console.log(err);
    }else{
        dataFromFile = data;
        console.log(data.toString());
        // write data into a new file.
    }
}

// Step 2: Read file.
// Giving Instruction to thread pool.
// please read data from file, and when you are done.
// push callback function to event queue with data or error.
// Async - processed by threadpool
fs.readFile("data.txt", printDataFunction);

// sync
console.log("Task 2");

// sync
// Step 3: Print data.
console.log("Task 3");

