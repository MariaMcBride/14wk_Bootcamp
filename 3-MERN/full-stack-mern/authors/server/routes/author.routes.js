const AuthorController = require('../controllers/author.controller');

module.exports = (app) => {
  app.get('/', AuthorController.findAllAuthors);
  app.post('/api/author/new', AuthorController.createNewAuthor);
  app.get('/api/author/:id', AuthorController.findOneAuthor);
  app.put('/api/author/update/:id', AuthorController.updateExistingAuthor);
  app.delete('/api/author/delete/:id', AuthorController.deleteOneAuthor);
}