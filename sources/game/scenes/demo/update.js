import {updateStates} from  'systems/updateStates.js';
import {cleanStates} from  'systems/cleanStates.js';

function update() {

    this.camera.update(this.delta.update);
    this.world.system(['position','states'], updateStates);
    this.world.system(['position','statesSensibility'], cleanStates);


}

export {update};
