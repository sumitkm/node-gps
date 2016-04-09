"use strict";
var app = (function () {
    function app() {
        var _this = this;
        this.com = require('serialport');
        this.serialPort = new com.SerialPort("/dev/ttyAMA0", {
            baudrate: 9600,
            parser: com.parsers.readline('\r\n')
        });
        this.serialPort.on("open", function () {
            console.log('open');
            _this.serialPort.on('data', function (data) {
                console.log(data);
            });
        });
    }
    return app;
}());
exports.app = app;
var nodeGps = new app();
