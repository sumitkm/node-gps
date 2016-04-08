var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var com  = require('serialport');

var serialPort = new com.SerialPort("/dev/ttyAMA0", {
  baudrate: 9600,
  parser: com.parsers.readline('\r\n')
});

serialPort.on("open", function () {
  console.log('open');
  serialPort.on('data', function(data) {
    console.log(data);
  });
});
