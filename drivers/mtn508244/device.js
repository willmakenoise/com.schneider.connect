'use strict';

const ZwaveDevice = require('homey-meshdriver').ZwaveDevice;

class Schneider508244 extends ZwaveDevice {

  onMeshInit() {
    /* this.enableDebug();
    this.printNode(); */
    this.registerCapability('button', 'BASIC');
    this.registerCapability('dim', 'SWITCH_MULTILEVEL', {
      get: 'SWITCH_MULTILEVEL_GET',
      set: 'SWITCH_MULTILEVEL_SET',
      report: 'SWITCH_MULTILEVEL_REPORT',
    });


    this.registerReportListener('BASIC', 'BASIC_GET', (rawReport, parsedReport) => {
      console.log('BASIC_GET', rawReport, parsedReport);
      // console.log('RawReport:', rawReport);
      // console.log('ParsedReport: ', parsedReport);

      const bs = Buffer.from([0xA2]);
      // let bs = {
      //   'Value': Buffer.from([0xA1])
      // }

      this.node.CommandClass.COMMAND_CLASS_BASIC
        .BASIC_REPORT(bs)
        .catch(this.error)
        .then(res => {
          console.log('Res: ', res);
        });

      /* this.node.CommandClass.COMMAND_CLASS_SWITCH_MULTILEVEL
        .SWITCH_MULTILEVEL_START_LEVEL_CHANGE(bs)
          .then(res => {
            this.log("Res: ", res);
          })
          .catch(this.error) */
    });

    this.registerReportListener('BASIC', 'BASIC_SET', (rawReport, parsedReport) => {
      console.log('HAHAHA, did BASIC_SET');
      console.log('BASIC_SET', rawReport, parsedReport);

      const bs = Buffer.from([0x20]);
      // let bs = {
      //   'Value': Buffer.from([0xA1])
      // }

      this.node.CommandClass.COMMAND_CLASS_BASIC
        .BASIC_GET()
        .catch(this.error)
        .then(res => {
          console.log('Res from Basic Report: ', res);
        });
      this.node.CommandClass.COMMAND_CLASS_BASIC
        .BASIC_SET({
          Value: false,
        })
        .catch(this.error)
        .then(res => {
          console.log('Res from Basic Report: ', res);
        });
      this.node.CommandClass.COMMAND_CLASS_CONFIGURATION
        .CONFIGURATION_GET(bs)
        .catch(this.error)
        .then(res => {
          console.log('Res from CONFIGURATION_GET: ', res);
        });
      this.node.CommandClass.COMMAND_CLASS_CONFIGURATION
        .CONFIGURATION_REPORT(bs)
        .catch(this.error)
        .then(res => {
          console.log('Res from CONFIGURATION_REPORT: ', res);
        });
    });
    this.registerReportListener('BASIC', 'BASIC_REPORT', (rawReport, parsedReport) => {
      console.log('BASIC REPORT', rawReport, parsedReport);
    });
    this.registerReportListener('CONFIGURATION', 'CONFIGURATION_REPORT', (rawReport, parsedReport) => {
      console.log('CONFIGURATION_REPORT', rawReport, parsedReport);
    });
    this.registerReportListener('SWITCH_MULTILEVEL', 'SWITCH_MULTILEVEL_REPORT', (rawReport, parsedReport) => {
      console.log('SWITCH_MULTILEVEL_REPORT', rawReport, parsedReport);
    });
    this.registerReportListener('SWITCH_MULTILEVEL', 'SWITCH_MULTILEVEL_GET', (rawReport, parsedReport) => {
      console.log('SWITCH_MULTILEVEL_GET', rawReport, parsedReport);
    });
    this.registerReportListener('SWITCH_MULTILEVEL', 'SWITCH_MULTILEVEL_SET', (rawReport, parsedReport) => {
      console.log('SWITCH_MULTILEVEL_SET', rawReport, parsedReport);
    });
    this.registerReportListener('BASIC_WINDOW_COVERING', 'BASIC_WINDOW_COVERING_START_LEVEL_CHANGE', (rawReport, parsedReport) => {
      console.log('BASIC_WINDOW_COVERING_START_LEVEL_CHANGE', rawReport, parsedReport);
    });
    this.registerReportListener('BASIC_WINDOW_COVERING', 'BASIC_WINDOW_COVERING_STOP_LEVEL_CHANGE', (rawReport, parsedReport) => {
      console.log('BASIC_WINDOW_COVERING_STOP_LEVEL_CHANGE', rawReport, parsedReport);
    });
    this.registerReportListener('SWITCH_MULTILEVEL', 'SWITCH_MULTILEVEL_START_LEVEL_CHANGE', (rawReport, parsedReport) => {
      console.log('SWITCH_MULTILEVEL_START_LEVEL_CHANGE', rawReport, parsedReport);
    });
    this.registerReportListener('SWITCH_MULTILEVEL', 'SWITCH_MULTILEVEL_STOP_LEVEL_CHANGE', (rawReport, parsedReport) => {
      console.log('SWITCH_MULTILEVEL_STOP_LEVEL_CHANGE', rawReport, parsedReport);
    });
    this.registerReportListener('MULTI_INSTANCE_ASSOCIATION', 'MULTI_INSTANCE_ASSOCIATION_REPORT', (rawReport, parsedReport) => {
      console.log('MULTI_INSTANCE_ASSOCIATION_REPORT', rawReport, parsedReport);
    });
    /* this.registerReportListener('', '', ( rawReport, parsedReport ) => {
      console.log('Other', rawReport, parsedReport);
    }); */
    // register a report listener (SDK2 style not yet operational)
    /* this.registerReportListener('CENTRAL_SCENE', 'CENTRAL_SCENE_NOTIFICATION',
      (rawReport, parsedReport) => {
        console.log('CENTRAL_SCENE_NOTIFICATION', rawReport, parsedReport);
      }); */

    this.log('Schneider Move Switch has been inited');


    // await this.configurationSet({index: 60, size: 1}, true);

    // await this.node.CommandClass.COMMAND_CLASS_MULTI_INSTANCE_ASSOCIATION
    //   .MULTI_INSTANCE_ASSOCIATION_GET();
    // await this.node.CommandClass.COMMAND_CLASS_MULTI_INSTANCE_ASSOCIATION
    //   .MULTI_INSTANCE_ASSOCIATION_GROUPINGS_GET();
    /* await this.node.CommandClass.COMMAND_CLASS_CONFIGURATION
      .CONFIGURATION_GET();
 */
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
    this.log('state', state);
    console.log('args2:');
    console.log(args);
    console.log('state2');
    console.log(state);
    return (state && args
      && state.hasOwnProperty('scene')
      && args.hasOwnProperty('scene'));
  }

}

module.exports = Schneider508244;
