const path = require("path");
const userModel = require("../models/user");
const repo = require("../repositories/user");
const sesssion = require("express-session");

exports.getRegisterView = (req, res)=>{
    console.log(path.join(__dirname,"../views/registration.html"));
    res.sendFile(path.join(__dirname,"../views/registration.html"));
}

exports.getLoginView = (req, res)=>{
    console.log(path.join(__dirname,"../views/login.html"));
    res.sendFile(path.join(__dirname,"../views/login.html"));
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


exports.login = (req, res)=>{
   repo.getByEmail(req.body.email, (record)=>{
       if(record && record.password==req.body.password){
        req.session.authenticated=true;
        req.session.user = record;
        res.sendFile(path.join(__dirname,"../../shared/views/home.html"));  
       }else{
           console.log("Error while login");
       }
   })
}