function updateStates(entities) {
    Object.entries(entities).forEach(([name, entity]) => {

        const positionComponent = entity.get('position');
        const statesComponent = entity.get('states');

        Object.entries(this.world.entities).forEach(([otherName, otherEntity]) => {
          const otherPositionComponent = otherEntity.get('position');
          if(positionComponent!==otherPositionComponent){
            const statesSensibilityComponent = otherEntity.get('statesSensibility');
            if(areNeighbours.call(this,positionComponent,otherPositionComponent,entities.length)){
              statesSensibilityComponent.states.forEach((stateSensibility,index) => {
                statesComponent.states.forEach((state)=>{
                  if(state==Object.keys(stateSensibility)[0]){
                    var stateSensibilityValues= stateSensibility[Object.keys(stateSensibility)[0]]
                    stateSensibilityValues.modified=true;
                  }
                });
              });
            }
          }
        });

    });
}

function areNeighbours(positionComponent,otherPositionComponent,entitiesLength){

  var width=this.size.width/32;
  var positionA=positionComponent.x/32+(positionComponent.y/32)*width;
  var positionB=otherPositionComponent.x/32+(otherPositionComponent.y/32)*width;
  if(Math.abs(positionA-positionB)==1 | Math.abs(positionA-positionB)==width){
    return true;
  }else return false;
}

export {updateStates};
