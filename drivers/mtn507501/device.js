'use strict';

const { ZwaveDevice } = require('homey-meshdriver');

class Schneider507501 extends ZwaveDevice {

	async onMeshInit() {
    // this.enableDebug();
    // this.printNode();

    this.registerCapability('onoff', 'SWITCH_BINARY');

    this.log('Schneider 1ch Relay has been inited');

    // Set paramater 176 (trappefunksjon). Ser ut til å skru av lyset etter 30sek ved value=1. 60sek ved value=2. 90sek ved value=3
    await this.configurationSet({index: 176, size: 1}, 0);

    // Set parameter 177 (trappefunksjon). 1 sek ved val=10. 10sek ved val=100. 30 sek ved val=-1 (255-1=254).
    await this.configurationSet({index: 177, size: 1}, 100);

    // Set parameter 183 (ekstra tilkoblingstid - slår av lyset kort og skrur på igjen i angitte sekunder, etter at trappebelysning har slått seg av).
    await this.configurationSet({index: 183, size: 1}, 10);

    // register a report listener
		// this.registerReportListener('MANUFACTURER_SPECIFIC', 'MANUFACTURER_SPECIFIC_REPORT', ( rawReport, parsedReport ) => {
    //   console.log('report listenr')
    //   console.log('registerReportListener', rawReport, parsedReport);
		// });

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
