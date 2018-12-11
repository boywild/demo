var net = require('net');
const events = require('events');

const channel = new events.EventEmitter();
channel.client = {};
channel.subscriptions = {};

channel.on('join', function(id, client) {
    this.client[id] = client;
    this.subscriptions[id] = function(senderId, message) {
        if (id != senderId) {
            this.client[id].write(message);
        }
    };
    this.on('broadcast', this.subscriptions[id]);
    const welcome =
        'welcome!\n' + 'Guests online:' + this.listeners('broadcast').length;
    this.client[id].write('welcome' + '\n');
});

channel.on('leave', function(id) {
    channel.removeListener('broadcast', channel.subscriptions[id]);
    channel.emit('broadcast', id, id + ' has left the chat .\n');
});

channel.on('shutdown', function() {
    channel.emit('brocast', '', 'all user has be shutdown');
    channel.removeAllListeners('broadcast');
});

var server = net.createServer(function(client) {
    const id = client.remoteAddress + ':' + client.remotePort;

    const i_d = id.replace(/^::ffff:/gi, '');
    console.log(i_d);
    channel.emit('join', i_d, client);
    // client.on('connect', function() {
    //     console.log(id);
    //     channel.emit('join', id, client);
    // });
    client.on('data', function(data) {
        data = data.toString();
        console.log(data);
        if (data === 'shutdown') {
            channel.emit('shutdown');
        }
        channel.emit('broadcast', i_d, data);
    });
    client.on('close', function() {
        channel.emit('leave', i_d);
    });
});

server.listen(8888);
