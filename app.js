'use strict';

const Homey = require('homey');

class SchneiderConnect extends Homey.App {

	onInit() {
		this.log('Schneider Connect is running...');
	}

}

module.exports = SchneiderConnect;
