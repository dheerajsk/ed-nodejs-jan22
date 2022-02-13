const tweetModel = require("../models/tweet");
const repo = require("../repositories/tweet");

exports.postTweet = (req, res)=>{
    const newTweet = new tweetModel(req.body.content, new Date(), req.body.userID);
    repo.add(newTweet, ()=>{
        res.send("Tweet is posted.");
    });
}