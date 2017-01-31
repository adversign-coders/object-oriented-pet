
const { Pet } = require('./pet');

const pet = new Pet('Emma');

pet.on(Pet.EVENT_UPDATE, () => {
  const { name, energy } = pet;
  console.log(`Name: ${name}, Energy: ${energy}`);
});


setInterval(pet.update, 1000 / 60);
