
const userModel = require("../models/user");
const repo = require("../repositories/user");

exports.update = (req, res)=>{
    const userToUpdate = 
    new userModel(req.body.name, req.body.email, req.body.password, 
        req.body.gender, req.body.id);
    repo.update(userToUpdate, ()=>{
        res.send("Data is Updated");
    })
    
}