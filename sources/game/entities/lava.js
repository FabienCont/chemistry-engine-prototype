import {Entity} from 'modules/world.js';
import {Camera} from 'components/common/camera.js';
import {Position} from 'components/common/position.js';
import {Images} from 'components/common/images.js';
import {StatesSensibility} from 'components/StatesSensibility.js';
import {States} from 'components/States.js';
import {Rock} from 'entities/rock.js';
import {randomRange} from 'modules/random.js';

function Lava(x,y) {

const entity=new Entity('lava_'+((y*10)+x), [
        new Camera(this.camera),
        new Position(x*32,y*32,0),
        new Images([{
            'source':  this.assets.images.common.lava(),
            'frames': [
                [0, 0, 32, 32]
            ],
            'frame': 0,
            'destination': [0, 0, 0, 32, 32]
        }]),
        new StatesSensibility({'cold':{
          'duration':2000+randomRange(-100,100),
          'elapsed':0,
          'modified':false,
          callback:(entity)=>{
            let newEntity=Rock.call(this,x,y);
            this.world.add(newEntity);
            this.grid[x+y*this.size.width/32]=newEntity;
            this.world.remove(entity);
          }
        },'water':{
          'duration':3000+randomRange(-100,100),
          'modified':false,
          'elapsed':0,
          callback:(entity)=>{
            let newEntity=Rock.call(this,x,y);
            this.world.add(newEntity);
            this.grid[x+y*this.size.width/32]=newEntity;
            this.world.remove(entity);
          }
        }}),
        new States(['fire'])
    ]);
    return entity;
  }


export {Lava};
