function cleanStates(entities) {
    Object.entries(entities).forEach(([name, entity]) => {
        const statesSensibilityComponent = entity.get('statesSensibility');

        Object.values(statesSensibilityComponent.states).forEach((stateSensibilityValues,index) => {
          if(stateSensibilityValues.modified==false){
            stateSensibilityValues.elapsed=0;
          }else{
            stateSensibilityValues.elapsed+= this.delta.update;
            if(stateSensibilityValues.elapsed>stateSensibilityValues.duration){
              stateSensibilityValues.callback.call(this,entity);
            }
            stateSensibilityValues.modified=false;
          }

        });
    });
}


export {cleanStates};
