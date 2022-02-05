// Step 1: Import fs library

const fs = require("fs");

// Read file Asynchronously.
fs.readFile("content.txt", (err, data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data.toString());
    }
})
console.log("Program completed");

