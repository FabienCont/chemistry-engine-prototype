function destroy() {


    delete this.world;
    delete this.grid;

    console.log('destroy demo scene');
    console.log('-------');
}

export {destroy};
