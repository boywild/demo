const socketio = require("socket.io");
let io,
  guestNumber = 1,
  nickNames = {},
  namesUsed = [],
  currentRoom = {};

/**
 * 分配昵称
 * 房间更换请求
 * 昵称更换请求
 * 发送聊天消息
 * 房间创建
 * 用户断开连接
 */
exports.listen = function(server) {
  io = socketio.listen(server);
  io.set("log level", 1);
  io.sockets.on("connection", function(socket) {
    guestNumber = assignGuestName(socket, guestNumber, nickNames, namesUsed);
    joinRoom(socket, "Lobby");
    handleMessageBroadcasting(socket, nickNames);
    handleRoomJoining(socket);
    socket.on("rooms", function() {
      socket.emit("rooms", io.socket.manager.rooms);
    });
    handleClientDisconnection(socket, nickNames, namesUsed);
  });
};
