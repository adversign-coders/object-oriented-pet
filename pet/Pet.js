const { EventEmitter } = require('events');

class Pet extends EventEmitter {

  constructor(name) {
    super();
    this.name = name;
    this.energy = 100;
    this.update = this.update.bind(this);
  }

  update() {
    if(this.energy > 0) {
        this.energy --;
        this.emit(Pet.EVENT_UPDATE, this);
    }
  }

}

Pet.EVENT_UPDATE = 'EVENT_UPDATE';

module.exports = Pet;
