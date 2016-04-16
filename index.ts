///<reference path="typings/main.d.ts" />

import { GpsParser as GpsParser } from "node-gps-parser";
import { GpsModel as GpsModel } from "node-gps-parser";

import com  = require('serialport');

class NodeGps
{
    private portName: string = "/dev/ttyAMA0"
    private baudRate: number = 9600;
    private serialPort: SerialPortStatic ;

    constructor(portName?: string, baudRate?: number)
    {
        if(portName != null)
        {
            this.portName = portName;
        }
        if(baudRate != null)
        {
            this.baudRate = baudRate;
        }
        
        this.serialPort = new com.SerialPort(this.portName,
        {
          baudRate: this.baudRate,
          parser: com.parsers.readline('\r\n')
        });
    }

    connect = () =>
    {
        this.serialPort.on("open",  () =>
        {
          console.log('open');
          this.serialPort.on('data', (data) =>
          {
              console.log(data);
          });
        });
    }
}

export { NodeGps } ;

var gps = new NodeGps();
gps.connect();
