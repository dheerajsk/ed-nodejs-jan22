// Job of controller is to take request and send response.

const userModel = require("../models/user");
const repo = require("../repositories/user");

exports.register = (req, res)=>{

    const newUser = new userModel(req.body.name, req.body.email, 
        req.body.password, req.body.gender);
    // call repor (newUser)
    repo.add(newUser, ()=>{
        res.send("Data is Added");
    })
}

exports.login = (req, res)=>{
    console.log("This is login request");
    res.send("This is login");
}