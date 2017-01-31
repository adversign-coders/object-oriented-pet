
const Alive = require('../Alive');

describe('Alive', () => {

  it('represents a living pet');

  describe('update(pet)', () => {
    it('consumes energy of the pet', () => {

      const mockedPet = {
        energy: 100
      };

      Alive.update(mockedPet);

      expect(mockedPet.energy).toBe(99);
    });

    it('changes the state to Dead when all energy is consumed', () => {
      const mockedPet = {
        energy: 1,
        setState: jest.fn()
      };

      Alive.update(mockedPet);
      expect(mockedPet.setState).not.toBeCalled();

      Alive.update(mockedPet);
      expect(mockedPet.setState).toBeCalled();
    });
  });

});
