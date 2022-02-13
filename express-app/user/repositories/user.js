
const db = require("../../config/mongodb");
const { ObjectId } = require("mongodb");


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

exports.update = (model, cb)=>{
    // Step 1: Get Collection
    const collection = db.getCollection("user");

    // Step 2: Define how to find the document
    const filter = {_id: ObjectId(model._id)};

    // Step 3: Define what properties need to be updated
    // set operator updates individual properties of document.
    const update = { $set: {name: model.name, password: model.password, 
        gender: model.gender} };

    collection.findOneAndUpdate(filter, update)
        .then(()=>{
            cb()
        },
        err=>{console.log(err)})

}


