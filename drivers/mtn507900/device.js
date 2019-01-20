'use strict';

const { ZwaveDevice } = require('homey-meshdriver');

class Schneider507900 extends ZwaveDevice {

  onMeshInit() {
    this.enableDebug();
    this.printNode();

    const settings = this.getSettings();

    this.registerCapability('onoff', 'SWITCH_MULTILEVEL');
    this.registerCapability('dim', 'SWITCH_MULTILEVEL', {
    
    });
    this.log('Schneider Dimmer has been inited');

    // console.log('Options');
    // console.log(this.getOptions());

    console.log('Dim Duration:');
    console.log(settings.dimming_duration);

  }

}

module.exports = Schneider507900;
