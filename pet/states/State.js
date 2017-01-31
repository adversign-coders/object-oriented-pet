
class State {

  constructor() {
    if(new.target == State) {
      throw new Error('State is abstract....');
    }
  }

  update(pet) {
    throw new Error('You should implement update()');
  }

}

module.exports = State;
