'use strict';

const Homey = require('homey');
const ZwaveDevice = require('homey-meshdriver').ZwaveDevice;

class Schneider507801 extends ZwaveDevice {

  onMeshInit() {
    this.enableDebug();
    this.printNode();
    this.log('Schneider Roller shutter has been inited');

    console.log('node ids', this.node.MultiChannelNodes);
    this.log('multi channel configuration is:', this.multiChannelConfigurationDisabled ? 'disabled' : 'enabled');

    const nodeIds = this.getMultiChannelNodeIdsByDeviceClassGeneric('GENERIC_TYPE_WINDOW_COVERING');
    console.log('Generic nodeIds: ', nodeIds);

    this.registerCapability('windowcoverings_set', 'SWITCH_MULTILEVEL', {
      multiChannelNodeId: nodeIds[0],
    });
    this.registerCapability('windowcoverings_tilt_set', 'SWITCH_MULTILEVEL', {
      multiChannelNodeId: nodeIds[1],
    });

    this.registerCapability('onoff', 'SWITCH_MULTILEVEL');

    this.node.CommandClass.COMMAND_CLASS_BASIC.BASIC_GET()
      .catch(this.error)
      .then(result => {
        console.log('result: ', result);
      });

    /* this.registerCapability('dim', 'SWITCH_MULTILEVEL');
    this.registerCapability('onoff', 'BASIC_WINDOW_COVERING', {
      getOpts: {
        getOnStart: true,
        pollInterval: 10,
      },
    }); */
    /* this.registerCapability('onoff', 'BASIC_WINDOW_COVERING', {
      set: 'BASIC_WINDOW_COVERING_START_LEVEL_CHANGE',
      setParser: this._onoffSetParser.bind(this),
    }); */
    /* this.registerCapability('windowcoverings_state', 'BASIC_WINDOW_COVERING');
    this.registerCapability('windowcoverings_tilt_set', 'SWITCH_MULTILEVEL');
    this.registerCapability('windowcoverings_set', 'SWITCH_MULTILEVEL'); */

    /* this.registerCapability('windowcoverings_state', 'BASIC', {
      get: 'BASIC_GET',
      set: 'BASIC_SET',
      setParser: value => {
        console.log('\nValue: ', value)

        let invertDirection = false;
        // if (node.hasOwnProperty('settings') && node.settings.hasOwnProperty('invert_direction')) {
        //   invertDirection = node.settings.invert_direction;
        // }

        let result = 0;
        let offset = 8;
        let state = this.getCapabilityValue('windowcoverings_state');
        console.log(value);
        console.log(state);

      report: 'BASIC_REPORT',
      reportParser(report) {
        console.log(report);
        return null;
      }
    }); */

    /* this.registerCapability('dim.shutter0', 'SWITCH_MULTILEVEL', {
      multiChannelNodeId: 0,
    });
    this.registerCapability('onoff.shutter0', 'BASIC_WINDOW_COVERING', {
      multiChannelNodeId: 0,
    });
    this.registerCapability('dim.shutter1', 'SWITCH_MULTILEVEL', {
      multiChannelNodeId: 1,
    });
    this.registerCapability('onoff.shutter1', 'BASIC_WINDOW_COVERING', {
      multiChannelNodeId: 1,
    });
    this.registerCapability('dim.shutter2', 'SWITCH_MULTILEVEL', {
      multiChannelNodeId: 2,
    });
    this.registerCapability('onoff.shutter2', 'BASIC_WINDOW_COVERING', {
      multiChannelNodeId: 2,
    }); */

    /* this.registerReportListener('SWITCH_MULTILEVEL', 'SWITCH_MULTILEVEL_SET', (rawReport, parsedReport) => {
      console.log('SWITCH_MULTILEVEL_SET', rawReport, parsedReport);
    });
    this.registerReportListener('SWITCH_MULTILEVEL', 'SWITCH_MULTILEVEL_GET', (rawReport, parsedReport) => {
      console.log('SWITCH_MULTILEVEL_GET', rawReport, parsedReport);
    });
    this.registerReportListener('SWITCH_MULTILEVEL', 'SWITCH_MULTILEVEL_REPORT', (rawReport, parsedReport) => {
      console.log('SWITCH_MULTILEVEL_REPORT', rawReport, parsedReport);
    });
    this.registerReportListener('SWITCH_MULTILEVEL', 'SWITCH_MULTILEVEL_START_LEVEL_CHANGE', (rawReport, parsedReport) => {
      console.log('SWITCH_MULTILEVEL_START_LEVEL_CHANGE', rawReport, parsedReport);
    });
    this.registerReportListener('SWITCH_MULTILEVEL', 'SWITCH_MULTILEVEL_STOP_LEVEL_CHANGE', (rawReport, parsedReport) => {
      console.log('SWITCH_MULTILEVEL_STOP_LEVEL_CHANGE', rawReport, parsedReport);
    });
    this.registerReportListener('BASIC', 'BASIC_SET', (rawReport, parsedReport) => {
      console.log('BASIC_SET', rawReport, parsedReport);
    });
    this.registerReportListener('BASIC', 'BASIC_GET', (rawReport, parsedReport) => {
      console.log('BASIC_GET', rawReport, parsedReport);
    });
    this.registerReportListener('BASIC', 'BASIC_REPORT', (rawReport, parsedReport) => {
      console.log('BASIC_REPORT', rawReport, parsedReport);
    });
    this.registerReportListener('BASIC_WINDOW_COVERING', 'BASIC_WINDOW_COVERING_START_LEVEL_CHANGE', (rawReport, parsedReport) => {
      console.log('BASIC_WINDOW_COVERING_START_LEVEL_CHANGE', rawReport, parsedReport);
    });
    this.registerReportListener('BASIC_WINDOW_COVERING', 'BASIC_WINDOW_COVERING_STOP_LEVEL_CHANGE', (rawReport, parsedReport) => {
      console.log('BASIC_WINDOW_COVERING_STOP_LEVEL_CHANGE', rawReport, parsedReport);
    });

    this.registerMultiChannelReportListener(1, 'SWITCH_MULTILEVEL', 'SWITCH_MULTILEVEL_SET', (rawReport, parsedReport) => {
      console.log('SWITCH_MULTILEVEL_SET', rawReport, parsedReport);
    });
    this.registerMultiChannelReportListener(1, 'SWITCH_MULTILEVEL', 'SWITCH_MULTILEVEL_GET', (rawReport, parsedReport) => {
      console.log('SWITCH_MULTILEVEL_GET', rawReport, parsedReport);
    });
    this.registerMultiChannelReportListener(1, 'SWITCH_MULTILEVEL', 'SWITCH_MULTILEVEL_REPORT', (rawReport, parsedReport) => {
      console.log('SWITCH_MULTILEVEL_REPORT', rawReport, parsedReport);
    });
    this.registerMultiChannelReportListener(1, 'SWITCH_MULTILEVEL', 'SWITCH_MULTILEVEL_START_LEVEL_CHANGE', (rawReport, parsedReport) => {
      console.log('SWITCH_MULTILEVEL_START_LEVEL_CHANGE', rawReport, parsedReport);
    });
    this.registerMultiChannelReportListener(1, 'SWITCH_MULTILEVEL', 'SWITCH_MULTILEVEL_STOP_LEVEL_CHANGE', (rawReport, parsedReport) => {
      console.log('SWITCH_MULTILEVEL_STOP_LEVEL_CHANGE', rawReport, parsedReport);
    });
    this.registerMultiChannelReportListener(1, 'BASIC', 'BASIC_SET', (rawReport, parsedReport) => {
      console.log('BASIC_SET', rawReport, parsedReport);
    });
    this.registerMultiChannelReportListener(1, 'BASIC', 'BASIC_GET', (rawReport, parsedReport) => {
      console.log('BASIC_GET', rawReport, parsedReport);
    });
    this.registerMultiChannelReportListener(1, 'BASIC', 'BASIC_REPORT', (rawReport, parsedReport) => {
      console.log('BASIC_REPORT', rawReport, parsedReport);
    });
    this.registerMultiChannelReportListener(1, 'BASIC_WINDOW_COVERING', 'BASIC_WINDOW_COVERING_START_LEVEL_CHANGE', (rawReport, parsedReport) => {
      console.log('BASIC_WINDOW_COVERING_START_LEVEL_CHANGE', rawReport, parsedReport);
    });
    this.registerMultiChannelReportListener(1, 'BASIC_WINDOW_COVERING', 'BASIC_WINDOW_COVERING_STOP_LEVEL_CHANGE', (rawReport, parsedReport) => {
      console.log('BASIC_WINDOW_COVERING_STOP_LEVEL_CHANGE', rawReport, parsedReport);
    });

    this.registerMultiChannelReportListener(2, 'SWITCH_MULTILEVEL', 'SWITCH_MULTILEVEL_SET', (rawReport, parsedReport) => {
      console.log('SWITCH_MULTILEVEL_SET', rawReport, parsedReport);
    });
    this.registerMultiChannelReportListener(2, 'SWITCH_MULTILEVEL', 'SWITCH_MULTILEVEL_GET', (rawReport, parsedReport) => {
      console.log('SWITCH_MULTILEVEL_GET', rawReport, parsedReport);
    });
    this.registerMultiChannelReportListener(2, 'SWITCH_MULTILEVEL', 'SWITCH_MULTILEVEL_REPORT', (rawReport, parsedReport) => {
      console.log('SWITCH_MULTILEVEL_REPORT', rawReport, parsedReport);
    });
    this.registerMultiChannelReportListener(2, 'SWITCH_MULTILEVEL', 'SWITCH_MULTILEVEL_START_LEVEL_CHANGE', (rawReport, parsedReport) => {
      console.log('SWITCH_MULTILEVEL_START_LEVEL_CHANGE', rawReport, parsedReport);
    });
    this.registerMultiChannelReportListener(2, 'SWITCH_MULTILEVEL', 'SWITCH_MULTILEVEL_STOP_LEVEL_CHANGE', (rawReport, parsedReport) => {
      console.log('SWITCH_MULTILEVEL_STOP_LEVEL_CHANGE', rawReport, parsedReport);
    });
    this.registerMultiChannelReportListener(2, 'BASIC', 'BASIC_SET', (rawReport, parsedReport) => {
      console.log('BASIC_SET', rawReport, parsedReport);
    });
    this.registerMultiChannelReportListener(2, 'BASIC', 'BASIC_GET', (rawReport, parsedReport) => {
      console.log('BASIC_GET', rawReport, parsedReport);
    });
    this.registerMultiChannelReportListener(2, 'BASIC', 'BASIC_REPORT', (rawReport, parsedReport) => {
      console.log('BASIC_REPORT', rawReport, parsedReport);
    });
    this.registerMultiChannelReportListener(2, 'BASIC_WINDOW_COVERING', 'BASIC_WINDOW_COVERING_START_LEVEL_CHANGE', (rawReport, parsedReport) => {
      console.log('BASIC_WINDOW_COVERING_START_LEVEL_CHANGE', rawReport, parsedReport);
    });
    this.registerMultiChannelReportListener(2, 'BASIC_WINDOW_COVERING', 'BASIC_WINDOW_COVERING_STOP_LEVEL_CHANGE', (rawReport, parsedReport) => {
      console.log('BASIC_WINDOW_COVERING_STOP_LEVEL_CHANGE', rawReport, parsedReport);
    }); */

    /* this.getMultiChannelNodeIdsByDeviceClassGeneric('GENERIC_TYPE_WINDOW_COVERING', res => {
      console.log('getMultiChannelNodeIdsByDeviceClassGeneric: ', res);
    });
 */
    /* this.registerMultipleCapabilityListener(['dim', 'onoff'], (valueObj, optsObj) => {
      this.log('valueObj', valueObj);
      this.log('optsObj', optsObj);
      return Promise.resolve();
    }, 500); */

    /* this.registerCapabilityListener('onoff', (value, opts) => {
      this.log('value', value);
      this.log('opts', opts);

      return this.executeCapabilitySetCommand('onoff', 'BASIC_WINDOW_COVERING', 0);
    }); */
  }

  /* _onoffSetParser(value) {
    console.log('_onoffSetParser start. value: ', value);
    let val;
    if (value) val = 0;
    else val = 64;
    console.log('_onoffSetParser end. value: ', val);
    return {
      Value: val,
    };
  } */

  async onOffRunListener(args, state, on) {
    // const res = await this.node.CommandClass.COMMAND_CLASS_BASIC.BASIC_GET();
    const res = await this.node.CommandClass.COMMAND_CLASS_SWITCH_MULTILEVEL.SWITCH_MULTILEVEL_SET({
      Value: 255,
    });
    console.log('onOffRunListener');
    console.log(res);
    return res;
  }

}

module.exports = Schneider507801;
