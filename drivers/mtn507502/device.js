'use strict';

const { ZwaveDevice } = require('homey-meshdriver');

class Schneider507601 extends ZwaveDevice {

  onMeshInit() {
    this.registerCapability('onoff', 'SWITCH_BINARY');
    this.log('Schneider Relay has been inited');

    // this.CommandClass.COMMAND_CLASS_BASIC.BASIC_GET().catch(this.error).then(this.log);
  }

}

module.exports = Schneider507601;
