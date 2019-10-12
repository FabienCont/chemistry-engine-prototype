import {updateStates} from  'systems/updateStates.js';
import {cleanStates} from  'systems/cleanStates.js';

function update() {
    //var start = performance.now();

    this.camera.update(this.delta.update);
    this.world.system(['statesSensibility'], cleanStates);
    this.world.system(['position','states'], updateStates);

    // var end = performance.now();
    // var time = end - start;
    // console.log(time);

}

export {update};
