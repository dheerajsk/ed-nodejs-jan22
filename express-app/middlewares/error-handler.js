const fs = require("fs");

const handler = (error, req, res, next)=>{
    // console.log(error.stack);
    fs.appendFileSync("./logs/server-error.txt", error.toString()
    +"\n"+error.stack.toString());
    res.send("Server error has occurred. Please contact support");
}

module.exports = handler;