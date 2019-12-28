'use strict';

const Homey = require('homey');

class Schneider508244Driver extends Homey.Driver {
    onInit() {
        super.onInit();

        // this.onButtonTrigger = new Homey.FlowCardTriggerDevice('mtn508244').register().registerRunListener((args, state) => {
        //   console.log('args:');
        //   console.log(args);
        //   console.log('state');
        //   console.log(state);
        //   return args.device.buttonRunListener(args, state);
        // });
    }
}

module.exports = Schneider508244Driver;
