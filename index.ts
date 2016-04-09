///<amd-dependency path="typings/main.d.ts" />

export class app
{
    com  = require('serialport');
    serialPort = new com.SerialPort("/dev/ttyAMA0", {
      baudrate: 9600,
      parser: com.parsers.readline('\r\n')
    });

    constructor()
    {
        this.serialPort.on("open",  () =>
        {
          console.log('open');
          this.serialPort.on('data', (data) => {
            console.log(data);
          });
        });
    }
}

var nodeGps = new app();
