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
const userAuthRoutes = require("./user/routes/user-auth-routes");
const userRoutes = require("./user/routes/user-routes");
const bodyParser = require("body-parser");
const mongodb = require("./config/mongodb");

// Step 2: Create server
const server = express();

// Connect to mongodb
mongodb.connect();

// Step 3: open a port and listen for client
server.listen(3200, ()=>{
    console.log("Server is listenng");
});
// Order of middlewares matter.
server.use(bodyParser.json());

// Routings.
server.use("/api/user/auth", userAuthRoutes);
server.use("/api/user/", userRoutes);
server.use((req, res)=>{
    res.status(404).send("Please check your path");
})

// Step 4: Handle default requests.
server.get("/", (req, res)=>{
    res.end("Hello from Express. You are connected");
})