
const db = require("../../config/mongodb");


// model - user data
// cb - callback to invoke after data is added
exports.add = (model, cb)=>{
    // Step 1: Access collection.
    const collection = db.getCollection("user");
    collection.insertOne({name: model.name, email: model.email, password: model.password, gender: model.gender})
        .then(()=>{
            cb();
        },
        err=>{throw new Error(err);})
}