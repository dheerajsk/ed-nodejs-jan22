const jwt = require("jsonwebtoken");

const verify = (req,res, next) =>{
    const token = req.headers["authorization"];

    if(!token) {
        res.status(401).send("Unauthorized");
    } else {
        try
        {
        const payload = jwt.verify(token, "This is my secret key");
        req.user = payload;
        }
        catch (err) {
            res.status(401).send("Invalid Token");
            console.log(err);
        }
    }
    next();
}

module.exports = verify;