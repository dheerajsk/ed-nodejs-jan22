

exports.register = (req, res)=>{
    console.log("This is register request");
    res.send("This is register");
}

exports.login = (req, res)=>{
    console.log("This is login request");
    res.send("This is login");
}