
const State = require('./State');

class Dead extends State {

  constructor() {
    super();
  }

  update(pet) {
    // Does nothing because it´s dead....
  }

}

module.exports = new Dead();
