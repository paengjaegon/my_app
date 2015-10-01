var net = require('net');
var sockets = [];

var server = net.createServer(
                function(socket) {
                        socket.name = socket.remoteAddress + ":" + socket.remotePort;
                        sockets.push(socket);
                        socket.write("Welcome " + socket.name + "\n");
                        broadcast(socket.name + " joined the chat\n", socket);

                        socket.on('data',
                                function(data) {
                                      console.log("socket data ");
                                        broadcast(socket.name + "> " + data, socket);
                                }
                        );

                        socket.on('end',
                                function(data) {
                                        console.log("socket end");
                                        sockets.splice(sockets.indexOf(socket), 1);
                                        broadcast(socket.name + " left the chat.\n");
                                }
                        );
                }
);

function broadcast(message, sender) {
        sockets.forEach(
                function (socket) {
                        if (socket === sender) return;
                        console.log("message : " , message);
                        socket.write(message);
                }
        );
}
server.listen(3000);
console.log("chat server start");
