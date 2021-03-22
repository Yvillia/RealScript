// spining up websocket and http server
const webSocketServer = require("websocket").server;
const http = require("http");
const uuid = require("uuid");
const webSocketServerPort = 8080;

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

// Commented out part is for testing
// wsServer.on('connection', function connection(ws) {
//     console.log("Here1");
//     ws.on('message', function incoming(data) {
//         console.log(data);
//         wsServer.clients.forEach(function each(client) {
//             console.log("Here3");
//             if (client !== ws && client.readyState === WebSocket.OPEN) {
//                 client.send(data);
//                 console.log(data);
//             }
//         });
//     });
// });

const typesDef = {
  USER_EVENT: "userevent",
  CONTENT_CHANGE: "contentchange"
}

// sending the current data to all connected clients
const sendMessage = (json) => {
  Object.keys(clients).map((client) => {
    clients[client].sendUTF(json);
  });
}

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
  connection.on("message", function (message) {
    if (message.type === "utf8") {
      console.log("Received Message: " + message.utf8Data);

      // broadcasting message to all connected clients
      for (var key in clients) {
        clients[key].sendUTF(message.utf8Data);
        // clients[key].sendUTF(
        //     JSON.stringify({type: 'ADD_MESSAGE', payload: key})
        // );
        // console.log('sent Message to: ', clients[key]);
      }
    }
  });
  connection.on('close', function(connection) {
    console.log((new Date()) + " Peer " + userID + " disconnected.");
    const json = { type: typesDef.USER_EVENT };
    userActivity.push(`${users[userID].username} left the document`);
    json.data = { users, userActivity };
    delete clients[userID];
    delete users[userID];
    sendMessage(JSON.stringify(json));
  });
});
