const http = require('http');
const fs = require('fs');
const path = require('path');
const mime = require('mime');

let cache = {}


function send404(response) {
    response.writeHead('404', { 'Content-type': 'text/plain' });
    response.write('Error 404:resource not found');
    response.end();
}

function sendFile(response, filePath, fileContents) {
    response.writeHead(200, { 'Content-type': mime.lookup(path.basename(filePath)) });
    response.end(fileContents);
}

function serverStatic(response,cache,absPath){
    if(cache[absPath]){
        sendFile(response,absPath,cache[]);
    }
}
console.log(path.basename);