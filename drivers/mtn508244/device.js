'use strict';

const { ZwaveDevice } = require('homey-meshdriver');

class Schneider508244 extends ZwaveDevice {

	onMeshInit() {
		this.registerCapability('button', 'SWITCH_REMOTE');
		this.log('Schneider Move Switch has been inited');
	}

}

module.exports = Schneider508244;
