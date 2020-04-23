'use strict';

const ZwaveDevice = require('homey-meshdriver').ZwaveDevice;

class Schneider00x903 extends ZwaveDevice {

  onMeshInit() {
    // this.enableDebug();
    // this.printNode();

    this.registerCapability('onoff', 'BASIC');
    this.registerCapability('dim', 'SWITCH_MULTILEVEL');

    /* var commandClass = this.getCommandClass('BASIC'); */
    /* var commandClass = this.getCommandClass('SWITCH_MULTILEVEL');
    var command_get = commandClass.SWITCH_MULTILEVEL_GET((vals) => {
      console.log(vals);
    }); */

    /* var command_get = commandClass.SWITCH_MULTILEVEL_GET((vals) => {
      console.log(vals);
    }); */

    /* this.getCommandClass('BASIC').BASIC_SET(1)
      .catch(this.error)
      .then(res => {
        console.log("Res from Basic Report: ", res);
    })
    */

    /* console.log("CommandClass:");
    console.log(commandClass);

    console.log("command_get:");
    console.log(command_get); */

    /* this.node.CommandClass.COMMAND_CLASS_ASSOCIATION
      .ASSOCIATION_REPORT()
      .catch(this.error)
      .then(res => {
        console.log("Res from ASSOCIATION_GET: ", res);
    }) */
    /* this.node.CommandClass.COMMAND_CLASS_BASIC
      .BASIC_GET()
      .catch(this.error)
      .then(res => {
        console.log("Res from Basic Report: ", res);
    })
    */
    this.log('Schneider 2-Gang Switch has been inited');
  }

}
module.exports = Schneider00x903;
