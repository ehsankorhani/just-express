// http is native to Node.js
const http = require('http');

// fs is a file system module - it's build-in
// it gives node access to THIS (server) computer file system
const fs = require('fs');

// This will response to any http request to port 3000:

// // http module has a createServer method
// // callback function has two arguments: req and res
// const server = http.createServer((req, res) => {
//     // res: a way to respond to the requester
//     // http message:
//     // start-line:
//     // header:
//     // body:

//     // writeHead takes two arguments:
//     // 1. status code
//     // 2. object for the mime-type
//     res.writeHead(200, { 'content-type': 'text/html'});
//     res.write('<h1>Hello World!</h1>');
    
//     // close the connection
//     res.end();
// });

// -------------------------------------------------
// Let's create some routes:

// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.writeHead(200, { 'content-type': 'text/html'});
//         res.write('<h1>This is the home page!</h1>');
    
//         res.end();
//     } else {
//         res.writeHead(200, { 'content-type': 'text/html'});
//         res.write(`<h4>Sorry, this isn't the page you're looking for!</h4>`);    
//         res.end();
//     }    
// });

// // -------------------------------------------------
// // Serve the response from a html file:

// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.writeHead(200, { 'content-type': 'text/html'});
//         const homePageHTML = fs.readFileSync('node.html');
//         res.write(homePageHTML);    
//         res.end();
//     } else {
//         res.writeHead(200, { 'content-type': 'text/html'});
//         res.write(`<h4>Sorry, this isn't the page you're looking for!</h4>`);    
//         res.end();
//     }    
// });

// -------------------------------------------------
// Serve requests other than root /:

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'content-type': 'text/html'});
        const homePageHTML = fs.readFileSync('node.html');
        res.write(homePageHTML);    
        res.end();
    } else if (req.url === '/node.png') {
        res.writeHead(200, { 'content-type': 'image/png'});
        const image = fs.readFileSync('node.png');
        res.write(image);    
        res.end();
    } else if (req.url === '/style.css') {
        res.writeHead(200, { 'content-type': 'text/css'});
        const css = fs.readFileSync('style.css');
        res.write(css);    
        res.end();
    } else {
        res.writeHead(200, { 'content-type': 'text/html'});
        res.write(`<h4>Sorry, this isn't the page you're looking for!</h4>`);    
        res.end();
    }    
});

// createServer returns an object with a listen method
// it takes one argument which is the post to listen on http traffic
// whenever this post gets a request the createServer method will run
server.listen(3000);

