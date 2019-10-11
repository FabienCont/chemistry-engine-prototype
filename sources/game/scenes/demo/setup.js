import {Camera} from 'modules/camera.js'

function setup() {

    this.camera = new Camera(this.context, this.size.width, this.size.width);
    console.log('setup demo scene');
}

export {setup};
