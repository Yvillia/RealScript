const webSocketServerPort = 8000;
const webSocketServer = require('websocket').server;
const http = require('http');
const uuid = require('uuid');

// spining up websocket and http server
const server = http.createServer();
server.listen(webSocketServerPort, function() {
    console.log((new Date()) + 'Server is listening on port 8000');
});

// establish websocket server listening on port 8000
const wsServer = new webSocketServer({
    httpServer: server,
    autoAcceptConnections: false
});

function originIsAllowed(origin) {
    // TODO: put logic here to detect whether the specified origin is allowed. 
    return true;
};

const clients = {};

wsServer.on('request', function(request) {
    if (!originIsAllowed(request.origin)) {
        request.reject();
        console.log((new Date()) + ' Connection from origin ' + request.origin + ' rejected.');
    }
    var userID = uuid.v4();
    console.log((new Date()) + ' Recieved a new connection from origin ' + request.origin + '.');

    // use 'echo-protocol' for testing
    const connection = request.accept(null, request.origin);
    clients[userID] = connection;
    console.log('connected: ' + userID + ' in ' + Object.getOwnPropertyNames(clients));
    connection.on('message', function(message) {
        if (message.type == 'utf8') {
            console.log('Received Message: ', message.utf8Data);

            // broadcasting message to all connected clients
            for (key in clients) {
                // clients[key].sendUTF(message.utf8Data);
                clients[key].sendUTF(
                    JSON.stringify({type: 'ADD_MESSAGE', payload: 'hello'})
                );
                console.log('sent Message to: ', clients[key]);
            }
        }
    })
});


