// spining up websocket and http server
const webSocketServer = require("websocket").server;
const http = require("http");
const uuid = require("uuid");
const webSocketServerPort = 8080;
var currentMessageIter = 0;
var currentText = "";

const server = new http.createServer((req, res) => {
  console.log(new Date() + " Received request for " + req.url);
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Connected Properly!\n");
});

server.listen(webSocketServerPort, function () {
  console.log(new Date() + "Server is listening on port " + webSocketServerPort);
});

// establish websocket server listening on port 8080
const wsServer = new webSocketServer({
  port: webSocketServerPort,
  httpServer: server,
  autoAcceptConnections: false
});

function originIsAllowed(origin) {
  // TODO: put logic here to detect whether the specified origin is allowed.
  return true;
}

const clients = {};

wsServer.on("request", function (request) {
  if (!originIsAllowed(request.origin)) {
    request.reject();
    console.log(new Date() + " Connection from origin " + request.origin + " rejected.");
  }
  var userID = uuid.v4();
  console.log(new Date() + " Recieved a new connection from origin " + request.origin + ".");

  // use 'echo-protocol' for testing
  const connection = request.accept("chatting", request.origin);
  clients[userID] = connection;
  console.log("connected: " + userID + " in " + Object.getOwnPropertyNames(clients));

  if (currentText !== "")
    clients[userID].sendUTF(
      `{ "type":"utf8", "utf8Data": "{ \\\"name\\\": \\\"server\\\", \\\"messageState\\\" : -1, \\\"update\\\": \\\"${currentText}\\\", \\\"currMessageState\\\": ${currentMessageIter} }" }`
    );

  connection.on("message", function (message) {
    if (message.type === "utf8") {
      console.log("Received Message: " + message.utf8Data);
      const newMessage = JSON.parse(message.utf8Data);

      if (newMessage.update != undefined) {
        if (currentMessageIter <= newMessage.messageState) {
          while (currentMessageIter < message.messageState) setTimeout(10);
          if (newMessage.update !== currentText) {
            currentText = newMessage.update;
            // broadcasting message to all connected clients
            newMessage.messageState = ++currentMessageIter;
            message.utf8Data = JSON.stringify(newMessage);
            for (var key in clients) {
              clients[key].sendUTF(JSON.stringify(message));
            }
          }
        }
      } else {
        for (var key in clients) {
          clients[key].sendUTF(JSON.stringify(message));
        }
      }
    }
  });
});
