'use strict';

const { ZwaveDevice } = require('homey-meshdriver');

class Schneider508244 extends ZwaveDevice {

  onMeshInit() {
    this.enableDebug();
    // this.printNode();
    // this.registerCapability('button', 'SWITCH_REMOTE');

    this.registerReportListener('BASIC', 'BASIC_GET', ( rawReport, parsedReport ) => {
			console.log('\nReceived BASIC_GET from Move Switch');
      // console.log('RawReport:', rawReport);
      // console.log('ParsedReport: ', parsedReport);

      let bs = new Buffer([0xA2]);
      // let bs = {
      //   'Value': new Buffer([0xA1])
      // }

      // this.node.CommandClass.COMMAND_CLASS_BASIC
      //   .BASIC_REPORT(bs)
      //     .catch(this.error)
      //     .then(res => {
      //       this.log("Res: ", res);
      //     })

      this.node.CommandClass.COMMAND_CLASS_SWITCH_MULTILEVEL
        .SWITCH_MULTILEVEL_START_LEVEL_CHANGE(bs)
          .then(res => {
            this.log("Res: ", res);
          })
          .catch(this.error)

		});

    this.registerReportListener('CONFIGURATION', 'CONFIGURATION_REPORT', ( rawReport, parsedReport ) => {
			console.log('CONFIGURATION_REPORT', rawReport, parsedReport);
		});
    this.registerReportListener('SWITCH_MULTILEVEL', 'SWITCH_MULTILEVEL_REPORT', ( rawReport, parsedReport ) => {
			console.log('SWITCH_MULTILEVEL_REPORT', rawReport, parsedReport);
		});
    this.registerReportListener('BASIC_WINDOW_COVERING', 'BASIC_WINDOW_COVERING_START_LEVEL_CHANGE', ( rawReport, parsedReport ) => {
			console.log('BASIC_WINDOW_COVERING_START_LEVEL_CHANGE', rawReport, parsedReport);
		});
    this.registerReportListener('BASIC_WINDOW_COVERING', 'BASIC_WINDOW_COVERING_STOP_LEVEL_CHANGE', ( rawReport, parsedReport ) => {
			console.log('BASIC_WINDOW_COVERING_STOP_LEVEL_CHANGE', rawReport, parsedReport);
		});
    this.registerReportListener('SWITCH_MULTILEVEL', 'SWITCH_MULTILEVEL_START_LEVEL_CHANGE', ( rawReport, parsedReport ) => {
			console.log('SWITCH_MULTILEVEL_START_LEVEL_CHANGE', rawReport, parsedReport);
		});
    this.registerReportListener('SWITCH_MULTILEVEL', 'SWITCH_MULTILEVEL_STOP_LEVEL_CHANGE', ( rawReport, parsedReport ) => {
			console.log('SWITCH_MULTILEVEL_STOP_LEVEL_CHANGE', rawReport, parsedReport);
		});
    this.registerReportListener('MULTI_INSTANCE_ASSOCIATION', 'MULTI_INSTANCE_ASSOCIATION_REPORT', ( rawReport, parsedReport ) => {
			console.log('MULTI_INSTANCE_ASSOCIATION_REPORT', rawReport, parsedReport);
		});
    // this.registerReportListener('', '', ( rawReport, parsedReport ) => {
		// 	console.log('Other', rawReport, parsedReport);
		// });

    this.log('Schneider Move Switch has been inited');


    // await this.configurationSet({index: 60, size: 1}, true);

    // await this.node.CommandClass.COMMAND_CLASS_MULTI_INSTANCE_ASSOCIATION
    //   .MULTI_INSTANCE_ASSOCIATION_GET();
    // await this.node.CommandClass.COMMAND_CLASS_MULTI_INSTANCE_ASSOCIATION
    //   .MULTI_INSTANCE_ASSOCIATION_GROUPINGS_GET();
    // await this.node.CommandClass.COMMAND_CLASS_CONFIGURATION
    //   .CONFIGURATION_GET();

    // this.configurationGet({index: 4}).then( res => {
    //   console.log(res);
    // })
    // this.configurationGet({index: 60}).then( res => {
    //   console.log(res);
    // })
    // this.configurationGet({index: 44}).then( res => {
    //   console.log(res);
    // })
    // this.configurationGet({index: 54}).then( res => {
    //   console.log(res);
    // })
    // this.configurationGet({index: 52}).then( res => {
    //   console.log(res);
    // })
    // this.configurationGet({index: 55}).then( res => {
    //   console.log(res);
    // })

  }

  buttonRunListener(args, state) {
    this.log("state", state)
    console.log('args2:');
    console.log(args);
    console.log('state2');
    console.log(state);
    return (state && args &&
      state.hasOwnProperty('scene') &&
      args.hasOwnProperty('scene'))
	}

}

module.exports = Schneider508244;
