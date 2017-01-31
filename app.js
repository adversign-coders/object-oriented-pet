
const { Pet } = require('./pet');
const { State, Alive } = require('./pet').states;

const pet = new Pet('Emma');

pet.on(Pet.EVENT_UPDATE, (pet) => {
  const { name, energy } = pet;
  console.log(`Name: ${name}, Energy: ${energy}`);
});

pet.on(Pet.EVENT_STATE_CHANGE, (pet) => {
  const { name, state } = pet;
  console.log(`${name} is now ${state.constructor.name}`);
});

setInterval(pet.update, 1000 / 60);
