'use strict';

const { ZwaveDevice } = require('homey-meshdriver');

class Schneider507900 extends ZwaveDevice {

  async onMeshInit() {
    this.enableDebug();
    // this.printNode();

    this.registerCapability('onoff', 'SWITCH_MULTILEVEL');
    this.registerCapability('dim', 'SWITCH_MULTILEVEL', {

    });

    this.log('Schneider Dimmer has been inited');

    // this.registerReportListener('CONFIGURATION', 'CONFIGURATION_REPORT', ( rawReport, parsedReport ) => {
		// 	console.log('CONFIGURATION_REPORT', rawReport, parsedReport);
		// });
    this.registerReportListener('SWITCH_MULTILEVEL', 'SWITCH_MULTILEVEL_REPORT', ( rawReport, parsedReport ) => {
			console.log('SWITCH_MULTILEVEL_REPORT', rawReport, parsedReport);
		});
    this.registerReportListener('BASIC', 'BASIC_REPORT', ( rawReport, parsedReport ) => {
			console.log('BASIC_REPORT', rawReport, parsedReport);
		});
    // this.registerReportListener('ASSOCIATION', 'ASSOCIATION_REPORT', ( rawReport, parsedReport ) => {
		// 	console.log('ASSOCIATION_REPORT', rawReport, parsedReport);
		// });
    // this.registerReportListener('ASSOCIATION', 'ASSOCIATION_GROUPINGS_REPORT', ( rawReport, parsedReport ) => {
		// 	console.log('ASSOCIATION_GROUPINGS_REPORT', rawReport, parsedReport);
		// });

  }
}

module.exports = Schneider507900;
