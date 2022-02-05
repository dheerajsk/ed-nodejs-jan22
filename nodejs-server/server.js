// Step 1: Import http library.

const http = require("http");

// Node JS types of packages:
// 1. Core Module (fs, http)
// 2. External Pckages from npm (express, mongodb)
// Node Package Manager

// Step 2. Create a server

http.createServer((req, res)=>{
    res.end("Hello from NodeJS, You are connected!");
}).listen(3200);

console.log("Server is listening on 3200...");


// NodeJS - (JS based Runtime for servers)
// ExpressJS (Framework for NodeJS)
// Spring boot (Framework for Java)
// Django (Framework for Python)
// CodeIngnitor (Framework for Php)
// Angular (Framework for JavaScript)
// .Net (framework for c#)

// Benifits for Framework
// 1. Do more with less code
// 2. Saves time, and money
// 3. Allows you to focus on domain.
// 4. Gives you lot of packages and also provides structure.

