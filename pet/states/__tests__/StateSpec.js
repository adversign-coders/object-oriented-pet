
const State = require('../State');

describe('State', () => {

  it('is an abstract class for all states', () => {
    expect(() => new State()).toThrow(new Error('State is abstract....'));
  });

});
