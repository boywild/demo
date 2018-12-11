const socketio = require('socket.io');
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
    io.set('log level', 1);
    io.on('connection', function(socket) {
        guestNumber = assignGuestName(
            socket,
            guestNumber,
            nickNames,
            namesUsed
        );
        joinRoom(socket, 'Lobby');
        handleMessageBroadcasting(socket, nickNames);
        handleRoomJoining(socket);
        socket.on('rooms', function() {
            socket.emit('rooms', io.of('/').adapter.rooms);
        });
        handleClientDisconnection(socket, nickNames, namesUsed);
    });
};

/**
 * 分配昵称
 */
function assignGuestName(socket, guestNumber, nickNames, namesUsed) {
    const name = 'Guest' + guestNumber;
    nickNames[socket.id] = name;
    socket.emit('nameResult', {
        success: true,
        name: name
    });
    namesUsed.push(name);
    return guestNumber + 1;
}

/**
 * 加入房间
 */
function joinRoom(socket, room) {
    socket.join(room);
    currentRoom[socket.id] = room;
    socket.emit('joinResult', { room: room });
    socket.broadcast.to(room).emit('message', {
        text: nickNames[socket.id] + 'has join in romm'
    });
    const usersInRoom = io.of('/').in(room).clients;
    if (usersInRoom.length > 1) {
        let usersInRoomSummary = 'users currently in ' + room + ':';
        for (let index in usersInRoom) {
            let userSocketId = userInRoom[index].id;
            if (userSocketId !== socket.id) {
                if (index > 0) {
                    usersInRoomSummary += ',';
                }
                usersInRoomSummary += nickNames[userSocketId];
            }
        }
        usersInRoomSummary += '.';
        socket.emit('message', { text: usersInRoomSummary });
    }
}

/**
 * 昵称变更
 */

function handleNameChangeAttempts(socket, nickNames, namesUsed) {
    socket.on('nameAttempt', function(name) {
        if (name.indexOf('Guest') === 0) {
            socket.emit('nameResult', {
                success: false,
                message: 'Names cannot begin with Guest'
            });
        } else {
            if (name.indexOf(namesUsed) === -1) {
                const previousName = nickNames[socket.id];
                const previousNameIndex = namesUsed.indexOf();
                namesUsed.push(name);
                nickNames[socket.id] = name;
                delete namesUsed[previousNameIndex];
                socket.on('nameResult', {
                    success: true,
                    name: name
                });
            }
        }
    });
}

/**
 * 发送聊天消息
 */

function handleMessageBroadcasting(socket) {
    socket.on('message', function(message) {
        socket.broadcast.to(message.room).emit('message', {
            text: nickNames[socket.id] + ':' + message.text
        });
    });
}

/**
 * 创建房间
 */
function handleRoomJoining(socket) {
    socket.on('join', function(room) {
        socket.leave(currentRoom[socket.id]);
        joinRoom(socket, room.newRoom);
    });
}

/**
 * 用户断开连接
 */
function handleClientDisconnection(socket) {
    socket.on('disconnect', function() {
        let nameIndex = namesUsed.indexOf(nickNames[socket.id]);
        delete namesUsed[nameIndex];
        delete nickNames[socket.id];
    });
}
