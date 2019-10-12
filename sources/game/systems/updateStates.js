function updateStates(entities) {
  Object.entries(entities).forEach(([name, entity]) => {
    const positionComponent = entity.get('position');
    const neighbours=getNeighbours.call(this,positionComponent);

    neighbours.forEach((neighbour)=>{
      const statesSensibilityComponent = neighbour.get('statesSensibility');
      if( statesSensibilityComponent ){

        const statesComponent = entity.get('states');
        Object.entries(statesSensibilityComponent.states).forEach(([statesSensibilityName, statesSensibilityValues]) => {
          statesComponent.states.forEach((state)=>{
            if(state==statesSensibilityName){
              statesSensibilityValues.modified=true;
            }
          });
        });
      }

    });
  });
}

function getNeighbours(positionComponent){
  let position=positionComponent.x/32+(positionComponent.y/32)*this.size.width/32;
  var tabNeighbours = [];
  var distanceNeighbours=[-10,-1,1,10];
  for(var i=0,length=distanceNeighbours.length;i<length ; i++) {
     if(this.grid[position-distanceNeighbours[i]])tabNeighbours.push(this.grid[position-distanceNeighbours[i]]);
  }
  return tabNeighbours;
}

export {updateStates};
