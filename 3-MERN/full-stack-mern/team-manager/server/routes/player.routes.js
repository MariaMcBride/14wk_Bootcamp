const PlayerController = require('../controllers/player.controller');

module.exports = (app) => {
  app.get('/api/players', PlayerController.findAllPlayers);
  app.post('/api/player/new', PlayerController.createNewPlayer);
  app.get('/api/player/:id', PlayerController.findOnePlayer);
  app.put('/api/player/update/:id', PlayerController.updateExistingPlayer);
  app.delete('/api/player/delete/:id', PlayerController.deleteOnePlayer);
}
