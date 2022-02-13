
const userModel = require("../models/user");
const repo = require("../repositories/user");

exports.update = (req, res)=>{
    if(!req.body.id){
        res.status(400).send("ID is missing for user");
    }
    const userToUpdate = 
    new userModel(req.body.name, req.body.email, req.body.password, 
        req.body.gender, req.body.id);
    repo.update(userToUpdate, ()=>{
        res.status(200).send("Data is Updated");
    })
    
}