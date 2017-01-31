
const State = require('./State');
const Dead = require('./Dead');

class Alive extends State {

  constructor() {
    super();
  }

  update(pet) {
    if(pet.energy > 0) {
        pet.energy --;
        return true;
    }
    pet.setState(Dead);
  }

}

module.exports = new Alive();
