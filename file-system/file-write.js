
const fs = require("fs");

const data = {
    "name":"Please enter your name",
    "age":"Please enter your age"
};

fs.writeFile("data.txt", JSON.stringify(data), (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Data Write completed");
    }
});

console.log("Program completed");