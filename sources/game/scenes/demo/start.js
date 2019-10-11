import {World} from 'modules/world.js';
import {Camera} from 'components/common/camera.js';
import {Ice} from 'entities/ice.js';
import {Lake} from 'entities/lake.js';
import {Rock} from 'entities/rock.js';
import {Lava} from 'entities/lava.js';

function start() {

    this.world = new World(this);
    var height=this.size.height/32;
    var width=this.size.width/32;
    console.log('start demo scene');
    let getRandomEntity=()=>{
      let tab=[
         Lava,
         Ice,
         Lake,
         Rock
      ]
      return tab[Math.floor(Math.random() * Math.floor(tab.length))];
    }
    for (let i = 0; i< height; i++ ){
      for (let j = 0; j< width; j++ ){
          console.log(i,j);
          this.world.add(getRandomEntity().call(this,j,i));
      }
    }
}

export {start};
