function divSystemContentElement(message) {
    return $('<div></div>').html('<i>' + message + '</i>');
}

function divEscapedContentElement(message) {
    return $('<div></div>').text(message);
}

function processUserInput(chatApp, socket) {
    let message = $('#send-message').val();
    let systemMessage;
    if (message.charAt(0) === '/') {
        systemMessage = chatApp.processCommand(message);
        if (syetemMessage) {
            $('#messages').append(divSystemContentElement(syetemMessage));
        }
    } else {
        chatApp.sendMessage($('#room').text(), message);
        $('#messages').append(divEscapedContentElement(syetemMessage));
        $('#messages').scrollTop($('#messages').prop('scrollHeight'));
    }
    $('#messages').val('');
}
var socket = io();

$(document).ready(function() {
    var chatApp = new Chat(socket);

    socket.on('nameResult', function(result) {
        var message;
        if (result.success) {
            message = 'You are now known as ' + result.name + '.';
        } else {
            message = result.message;
        }
        $('#messages').append(divSystemContentElement(message));
    });

    socket.on('joinResult', function(result) {
        $('#room').text(result.room);
        $('#messages').append(divSystemContentElement('Room changed.'));
    });

    socket.on('message', function(message) {
        var newElement = $('<div></div>').text(message.text);
        $('#messages').append(newElement);
    });

    socket.on('rooms', function(rooms) {
        $('#room-list').empty();

        for (var room in rooms) {
            room = room.substring(0, room.length);
            if (room != '') {
                $('#room-list').append(divEscapedContentElement(room));
            }
        }

        $('#room-list div').click(function() {
            chatApp.processCommand('/join ' + $(this).text());
            $('#send-message').focus();
        });
    });

    setInterval(function() {
        socket.emit('rooms');
    }, 1000);

    $('#send-message').focus();

    $('#send-form').click(function() {
        processUserInput(chatApp, socket);
        return false;
    });
});
