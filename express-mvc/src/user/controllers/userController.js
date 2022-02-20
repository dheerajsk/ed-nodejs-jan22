const path = require("path");

exports.getRegisterView = (req, res)=>{
    console.log(path.join(__dirname,"../views/registration.html"));
    res.sendFile(path.join(__dirname,"../views/registration.html"));
}