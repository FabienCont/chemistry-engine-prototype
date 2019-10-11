import {Entity} from 'modules/world.js';
import {Camera} from 'components/common/camera.js';
import {Position} from 'components/common/position.js';
import {Images} from 'components/common/images.js';
import {StatesSensibility} from 'components/StatesSensibility.js';
import {randomRange} from 'modules/random.js';
import {States} from 'components/States.js';
import {Lava} from 'entities/lava.js';

function Rock(x,y) {
  const entity=new Entity('rock_'+(x*32)+y, [
        new Camera(this.camera),
        new Position(x*32,y*32,0),
        new Images([{
            'source':  this.assets.images.common.rock(),
            'frames': [
                [0, 0, 32, 32]
            ],
            'frame': 0,
            'destination': [0, 0, 0, 32, 32]
        }]),
        new StatesSensibility([
          {
            'fire':{
            'duration':6000+randomRange(-100,100),
            'elapsed':0,
            'modified':false,
            callback:(entity)=>{
              this.world.add(Lava.call(this,x,y));
              this.world.remove(entity);
            }
          }}
        ])
    ]);
    return entity;
  }


export {Rock};
