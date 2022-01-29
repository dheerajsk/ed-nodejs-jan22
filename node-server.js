// Creating a Web Server

// 1. Import HTTP Protocol module.

const http = require("http");

// 2 types of modules
// 1. Core Modules (which are part of nodejs package).
// 2. External Modules (everything else which are not part of core module)
    // - ex (mongodb, express) - NPM (Node Package Manager)
// Package Manager - allows to work with external packages
// Java - Maven
// Python - Pip
// c# - Nuget
// angular/react/vue - npm

http.createServer((req, res)=>{
    res.end("Hello world from NodeJS Server");
}).listen(3100);

console.log("Server is listening on 3100");