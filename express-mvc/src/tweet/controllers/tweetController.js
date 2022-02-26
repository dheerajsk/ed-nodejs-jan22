const path = require("path");
const repo = require("../repositories/tweet");

exports.getTweets = (req, res)=>{
    repo.getByUserID(req.session.user._id, (tweets)=>{
        console.log(tweets);
        res.render("tweet", {content: tweets});
    })
    // res.sendFile(path.join(__dirname,"../views/tweet.html"));
}
