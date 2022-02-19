const tweetModel = require("../models/tweet");
const repo = require("../repositories/tweet");

exports.postTweet = (req, res)=>{

    throw new Error("Uncaught exception in tweet")
    const newTweet = new tweetModel(req.body.content, new Date(), req.user._id);
    repo.add(newTweet, ()=>{
        res.send("Tweet is posted.");
    });
}