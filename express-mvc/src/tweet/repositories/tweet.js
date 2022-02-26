
const db = require("../../../config/mongodb");
const { ObjectId } = require("mongodb");

const getTweetCollection = ()=> {
    return db.getCollection("tweet");
}

exports.add = (model, cb)=>{
    // Step 1: Access collection.
    getTweetCollection().insertOne({content: model.content, timestamp: model.timestamp, userID: ObjectId(model.userID)})
        .then(()=>{
            cb();
        },
        err=>{throw new Error(err);})
}

exports.getByUserID = (id, cb)=>{
    // Step 1: Access collection.
    getTweetCollection().find({userID: id}).toArray()
        .then((tweets)=>{
            cb(tweets);
        },
        err=>{throw new Error(err);})
}