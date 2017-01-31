const { EventEmitter } = require('events');
const { Alive } = require('./states');

class Pet extends EventEmitter {

  constructor(name) {
    super();
    this.name = name;
    this.energy = 100;
    this.state = Alive;
    this.update = this.update.bind(this);
  }

  update() {
    if(this.state.update(this)) {
      this.emit(Pet.EVENT_UPDATE, this);
    }
  }

  setState(state) {
    this.state = state;
    this.emit(Pet.EVENT_STATE_CHANGE, this);
  }

}

Pet.EVENT_UPDATE = 'EVENT_UPDATE';
Pet.EVENT_STATE_CHANGE = 'EVENT_STATE_CHANGE';

module.exports = Pet;
