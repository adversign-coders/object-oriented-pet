
const Pet = require('../Pet');

const SOME_NAME = 'Foo';

describe('Pet', () => {

  it('is your virtual friend that always stays by your side');

  describe('new Pet(name)', () => {
      const pet = new Pet(SOME_NAME);

      it('stores the given name in a property', () => {
        expect(pet.name).toBe(SOME_NAME);
      });
  });

  describe('update()', () => {

    const pet = new Pet(SOME_NAME);

    it('updates the state of the pet', () => {
        expect(pet.energy).toBe(100);
        pet.update();
        expect(pet.energy).toBe(99);
    });

    it('does not consume energy when the pet is dead', () => {
      pet.energy = 1;
      expect(pet.energy).toBe(1);
      pet.update();
      expect(pet.energy).toBe(0);
      pet.update();
      expect(pet.energy).toBe(0);
    });

  });
});
