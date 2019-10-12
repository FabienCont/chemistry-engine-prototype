import {World} from 'modules/world.js';
import {Camera} from 'components/common/camera.js';
import {Ice} from 'entities/ice.js';
import {Lake} from 'entities/lake.js';
import {Rock} from 'entities/rock.js';
import {Lava} from 'entities/lava.js';

function start() {

    console.log('start demo scene');
    this.world = new World(this);
    let getRandomEntity=()=>{
      let tab=[
         Lava,
         Ice,
         Lake,
         Rock
      ]
      return tab[Math.floor(Math.random() * Math.floor(tab.length))];
    }
    this.grid=[];
    for (let i = 0; i< this.size.height/32; i++ ){
      for (let j = 0; j< this.size.width/32; j++ ){
          let entity= getRandomEntity().call(this,j,i)
          this.grid.push(entity)
          this.world.add(entity);
      }
    }
}

export {start};
