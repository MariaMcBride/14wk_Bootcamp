const ProductController = require('../controllers/product.controller');

// these are the routes that go to their respective functions in the controller
// best practice to put the routes with specific parameters (like _id) at the bottom and everything else at the top
module.exports = (app) => {
  app.get('/', ProductController.index);
  app.post('/api/product/new', ProductController.createNewProduct);
  app.get('/api/product/', ProductController.findAllProducts);
  app.get('/api/product/:id', ProductController.findOneProduct);
  app.put('/api/product/update/:id', ProductController.updateExistingProduct);
  app.delete('/api/product/delete/:id', ProductController.deleteOneProduct);
}
