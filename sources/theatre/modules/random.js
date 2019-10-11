function random(items) {

    if (typeof items === 'number'
    && items % 1 === 0
    && items > 0) {

        return Math.floor(items * Math.random());
    }

    if (Array.isArray(items)
    && items.length > 0) {

        return items[Math.floor(items.length * Math.random())];
    }

    return null;
}

function randomRange(min,max){
  return Math.random() * (max - min) + min;
}

// exports current module as a function
export {random,randomRange};
