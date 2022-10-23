const charactersController = require('./character.controller');
const petsController = require('./pets.controller');

module.exports = (app) => {
   app.post('/characters', charactersController.post);
   app.get('/characters', charactersController.get);

   app.post('/pets', petsController.post);
   app.get('/pets', petsController.get);
   app.get('/pets/:id', petsController.getById); 
}