

module.exports = class Tweet{
    // It initializes properties with values provided
    constructor(content, timestamp, userID, id){
        this._id = id;
        this.content = content;
        this.timestamp = timestamp;
        this.userID = userID;
    }
}