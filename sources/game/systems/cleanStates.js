function cleanStates(entities) {
    Object.entries(entities).forEach(([name, entity]) => {

        const statesSensibilityComponent = entity.get('statesSensibility');
        statesSensibilityComponent.states.forEach((stateSensibility,index) => {
        var stateSensibilityValues=stateSensibility[Object.keys(stateSensibility)[0]];
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
