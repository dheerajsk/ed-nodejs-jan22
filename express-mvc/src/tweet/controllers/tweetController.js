const path = require("path");

exports.getTweets = (req, res)=>{
    res.sendFile(path.join(__dirname,"../views/tweet.html"));
}