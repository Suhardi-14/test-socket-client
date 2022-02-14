var _socket = null;

_socket = require('socket.io-client')('http://localhost:5050', {
  autoConnect: false,
});

_socket.on('connect', () => {
  if (_socket.connected) {
    console.log('successfully connected to server');
  }
});

_socket.emit('deployed');

process.on('SIGINT', function () {
  console.log('\nGracefully shutting down from SIGINT (Ctrl-C)');
  // some other closing procedures go here
  process.exit(1);
});

_socket.open();
