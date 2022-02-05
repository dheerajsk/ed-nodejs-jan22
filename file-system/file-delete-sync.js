const fs = require("fs");
// console.log(__dirname);
// fs.unlinkSync("data.json");
fs.rmdir("files", {recursive: true}, (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("deleted");
    }
})

console.log("File deleted");

