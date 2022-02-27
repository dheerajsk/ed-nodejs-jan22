const express = require("express");
const socket = require("socket.io");


const server = express();

const http = require("http").Server(server);

const io = socket(http);

io.on("connection", (sCon)=>{
    console.log("Connection is made");
    sCon.on("client", (message)=>{
        io.emit("server", message);
    })
})


server.get("/", (req, res)=>{
    res.sendFile(__dirname+"/index.html");
});

http.listen(3300, ()=>{
    console.log("Server is listening on 3000");
})

