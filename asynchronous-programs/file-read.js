
const fs = require("fs"); 

fs.readFile("data.txt", (err, data)=>{
    if(data){
        console.log(data.toString());
    }
});

