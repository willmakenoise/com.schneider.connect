'use strict';

const { ZwaveDevice } = require('homey-meshdriver');

class Schneider507900 extends ZwaveDevice {

	onMeshInit() {
		this.registerCapability('dim', 'SWITCH_MULTILEVEL');
		this.registerCapability('onOff', 'SWITCH_MULTILEVEL');
		this.log('Schneider Dimmer has been inited');
	}

}

module.exports = Schneider507900;
