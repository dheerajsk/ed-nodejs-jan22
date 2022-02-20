
const express = require("express");
const userRoutes = require("./src/user/routes/user");

const server = express();

server.use("/user/", userRoutes);

server.listen(3000);
server.get("/", (req, res)=>{
    res.send("Hi, You are connected to Express MVC");
});

console.log("Server is listening on 3000");