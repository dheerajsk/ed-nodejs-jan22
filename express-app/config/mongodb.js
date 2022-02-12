// Step 1: Import mongodb library
const mongoDbCllient = require("mongodb").MongoClient;

// Step 2: Get Connection string
const url = "mongodb+srv://test:test@cluster0.cbdyt.mongodb.net/twitterapp?retryWrites=true&w=majority";

// Step 3: Connect to Mongodb Database server.

exports.connect = ()=>{
    mongoDbCllient.connect(url)
        .then(
            (client)=>{
                console.log("Mongodb is connected");
            },
            (err)=>{console.log(err);}
        )
}