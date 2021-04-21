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
// All active connections
const clients = {};
// All active users
const users = {};
// User activity history.
let userActivity = [];

const typesDef = {
  USER_EVENT: "userevent",
  CONTENT_CHANGE: "contentchange"
}

<<<<<<< HEAD
const sendMessage = (json) => {
  // We are sending the current data to all connected clients
  Object.keys(clients).map((client) => {
    clients[client].sendUTF(json);
  });
}

getRandomWelcome = (usr) => {
  const randomGenerator = [
    "Welcome " + usr + ". Say hi!\n",
    usr + " has joined the server!\n",
    usr + " just showed up!\n"
  ];
  return randomGenerator[Math.floor(Math.random() * Math.floor(3))];
}

=======
>>>>>>> f0cb1b0093027da2ee82665cbd4d4f70b32aabc4
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
    console.log("this is message: ");
    console.log(message);
    if (message.type === "utf8") {
      console.log("Received Message: " + message.utf8Data);
      const dataFromClient = JSON.parse(message.utf8Data);
      console.log(dataFromClient.username);
      const json = {"type": dataFromClient.type}
      if (dataFromClient.type === typesDef.USER_EVENT) {
        console.log("New user join the server: ");
        console.log(dataFromClient);
        users[userID] = dataFromClient;
        console.log("try access user name: ")
        console.log(users[userID].username);
        console.log("these are the users: ")
        console.log(users);
        userActivity.push(getRandomWelcome(dataFromClient.username));
        json.data = { users, userActivity };
      } else if (dataFromClient.type === typesDef.CONTENT_CHANGE) {
        json.data = message.utf8Data;
      }
      // broadcasting message to all connected clients
      console.log("check if json file format");
      console.log(JSON.stringify(json));
      sendMessage(JSON.stringify(json));
    }
  });

  // detect disconnection and remove user
  connection.on('close', function(connection) {
    console.log((new Date()) + " Peer " + userID + " disconnected.");
    const json = { type: typesDef.USER_EVENT };
    console.log("this is the user list:");
    console.log(users);
    console.log(users[userID]);
    userActivity.push(`${users[userID].username} has left.`);
    console.log(userActivity);
    json.data = { users, userActivity };
    delete clients[userID];
    delete users[userID];
    sendMessage(JSON.stringify(json));
  });
});
