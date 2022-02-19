// Job of controller is to take request and send response.

const userModel = require("../models/user");
const repo = require("../repositories/user");
const jwt = require("jsonwebtoken");

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
        // Create token using "jsonwebtoken"
        const token = jwt.sign({
            _id: record._id,
            email: record.email
        },
        "This is my secret key",
        {
            expiresIn: '2h'
        }
        );
        record.token=token;
        record.password=null;
        res.status(200).send(record);
    }else{
        res.status(400).send("Invalid Password");
    }
   })
   
}