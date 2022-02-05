
const fs = require("fs");

const data = {
    "name":"Please enter your name",
    "age":"Please enter your age"
};

fs.writeFileSync("data.json", JSON.stringify(data));

console.log("Program completed");