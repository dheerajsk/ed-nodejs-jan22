const path = require("path");
const userModel = require("../models/user");
const repo = require("../repositories/user");

exports.getRegisterView = (req, res)=>{
    console.log(path.join(__dirname,"../views/registration.html"));
    res.sendFile(path.join(__dirname,"../views/registration.html"));
}

exports.register = (req, res)=>{
    const newUser = new userModel(req.body.name, req.body.email, 
        req.body.password, req.body.gender);
    // call repor (newUser)
    repo.add(newUser, ()=>{
        console.log(path.join(__dirname,"../../shared/views/home.html"));
        res.sendFile(path.join(__dirname,"../../shared/views/home.html"));
    })
}