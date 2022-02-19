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
   const email = req.body.email;
   const password = req.body.password;
   repo.getByEmail(email, (record)=>{
    if(!record){
        res.status(400).send("Invalid Email");
    }
    if(record.password==password){
        res.status(200).send("Login done");
    }else{
        res.status(400).send("Invalid Password");
    }
   })
   
}