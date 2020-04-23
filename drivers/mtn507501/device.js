'use strict';

const ZwaveDevice = require('homey-meshdriver').ZwaveDevice;

class Schneider507501 extends ZwaveDevice {

  async onMeshInit() {
    // this.enableDebug();
    // this.printNode();

    this.registerCapability('onoff', 'SWITCH_BINARY');

    this.log('Schneider 1ch Relay has been inited');

    // Set paramater 176 (stair case function).
    // Turns of the switch after 30 sec, at value 1. delay = value * 30
    await this.configurationSet({
      index: 176,
      size: 1,
    }, 0);

    // Set parameter 177 (stair case function).
    // Turns of the switch in 0.1 sec intervals. delay = value * 0.1
    await this.configurationSet({
      index: 177,
      size: 1,
    }, 100);

    // Set parameter 183 (Additional limit duration (after brief interruption).
    // Turns the switch off for a short duration,
    // then turns on for set number of seconds after stair case function turned off.
    await this.configurationSet({
      index: 183,
      size: 1,
    }, 10);

    // this.configurationGet({index: 176}).then( res => {
    //   console.log(res);
    // })
    // this.configurationGet({index: 177}).then( res => {
    //   console.log(res);
    // })
    // this.configurationGet({index: 183}).then( res => {
    //   console.log(res);
    // })
  }

}

module.exports = Schneider507501;
