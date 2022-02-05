// express - not part of core module.

// NPM (Package Manager)

// Java - Maven
// .Net - Nuget
// Python - Pip

// Any app, needs lot of dependencies
// fs, http
// database.

// Step 1: Import express

const express = require("express");

// Step 2: Create server
const server = express();

// Step 3: open a port and listen for client
server.listen(3200, ()=>{
    console.log("Server is listenng");
});

// Step 4: Handle default requests.
server.get("/", (req, res)=>{
    res.end("Hello from Express. You are connected");
})