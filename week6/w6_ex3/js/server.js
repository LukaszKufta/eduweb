var ws = require("nodejs-websocket");
var server = ws.createServer(function(conn) {
    console.log("New client connected");
    conn.on("text", function(data) {
        var dataObject = JSON.parse(data);
        if (dataObject.type == "join") {
            conn.nickName = dataObject.name;
            sendToAll({
                type: "status",
                message: conn.nickName + " dalaczyl do czatu"
            });
        } else if (dataObject.type == "message") {
            sendToAll({
                type: "message",
                name: conn.nickName,
                message: dataObject.message
            });
        }
    });
    conn.on("close", function(data) {
        if (conn.nickName) {
            sendToAll({
                type: "status",
                message: conn.nickName + " opuscil czat"
            });
        }
        console.log(conn.nickName + " nie polaczony");
    });
    conn.on("error", function(data) {
        console.log("wszyscy rozlaczeni");
    })
}).listen(8000, "localhost", function() {
    console.log("serwer uruchomiony")
});
function sendToAll(data) {
    var msg = JSON.stringify(data);
    server.connections.forEach(function(conn) {
        conn.sendText(msg);
    });
}
