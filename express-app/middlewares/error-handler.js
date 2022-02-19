const fs = require("fs");

const handler = (error, req, res, next)=>{
    fs.appendFileSync("./logs/server-error.txt", error.toString());
    res.send("Server error has occurred. Please contact support");
}

module.exports = handler;