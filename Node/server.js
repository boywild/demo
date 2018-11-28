const http = require("http");
const fs = require("fs");
const path = require("path");
const mime = require("mime");
const chatServer = require("./lib/chat_server");

let cache = {};

function send404(response) {
  response.writeHead("404", { "Content-type": "text/plain" });
  response.write("Error 404:resource not found");
  response.end();
}

function sendFile(response, filePath, fileContents) {
  response.writeHead(200, {
    "Content-type": mime.getType(path.basename(filePath))
  });
  response.end(fileContents);
}

function serverStatic(response, cache, absPath) {
  if (cache[absPath]) {
    sendFile(response, absPath, cache[absPath]);
  } else {
    fs.exists(absPath, function(exists) {
      if (exists) {
        fs.readFile(absPath, function(err, data) {
          if (err) {
            send404(response);
          } else {
            cache[absPath] = data;
            sendFile(response, absPath, data);
          }
        });
      } else {
        send404(response);
      }
    });
  }
}

const server = http.createServer(function(req, res) {
  let filePath = false;
  if (req.url === "/") {
    filePath = "public/index.html";
  } else {
    filePath = "public" + req.url;
  }
  let absPath = "./" + filePath;
  serverStatic(res, cache, absPath);
});
server.listen(3000, function() {
  console.log("服务已启动，端口3000");
});
chatServer.listen(server);
console.log(path.basename);
