"use strict";
var com = require('serialport');
var NodeGps = (function () {
    function NodeGps(portName, baudRate) {
        var _this = this;
        this.portName = "/dev/ttyAMA0";
        this.baudRate = 9600;
        this.connect = function () {
            _this.serialPort.on("open", function () {
                console.log('open');
                _this.serialPort.on('data', function (data) {
                    console.log(data);
                });
            });
        };
        if (portName != null) {
            this.portName = portName;
        }
        if (baudRate != null) {
            this.baudRate = baudRate;
        }
        this.serialPort = new com.SerialPort(this.portName, {
            baudRate: this.baudRate,
            parser: com.parsers.readline('\r\n')
        });
    }
    return NodeGps;
}());
exports.NodeGps = NodeGps;
var gps = new NodeGps();
gps.connect();
