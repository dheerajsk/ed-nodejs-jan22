const fs = require("fs");

const data = {
    "name":"Please enter your name",
    "age":"Please enter your age"
};

fs.appendFileSync("content.txt", JSON.stringify(data));

console.log("File is updated");
