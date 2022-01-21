const Product = require('../models/product.model');

// these functions below are exported to any file that imports this controller file and has access to these functions below
module.exports.index = (req, res) => {
  res.json({
    message: "Welcome."
  });
};
// --------------- CREATE ---------------- //
module.exports.createNewProduct = (req, res) => {
  console.log("Creating new...")
  Product.create(req.body)
    .then(newlyCreatedProduct =>
      res.json({ results: newlyCreatedProduct }))
    .catch(err =>
      res.json({ err: err, message: "Something went wrong." }));
};
// ------------ RETRIEVE ALL ------------- //
module.exports.findAllProducts = (req, res) => {
  console.log("Finding all...")
  Product.find()
    .then(allProducts => {
      res.json({ results: allProducts })
    })
    .catch(err =>
      res.json({ err: err, message: "Something went wrong." }));
};
// ------------ RETRIEVE ONE ------------- //
module.exports.findOneProduct = (req, res) => {
  console.log("Finding one...")
  Product.findOne({ _id: req.params.id }) // req.params.id represents the id sent through the route so they must match (if you get an error, remove {} and "_id:" key)
    .then(oneProduct => {
      res.json({ results: oneProduct })
    })
    .catch(err =>
      res.json({ err: err, message: "Something went wrong." }));
};
// --------------- UPDATE ---------------- //
module.exports.updateExistingProduct = (req, res) => {
  Product.findOneAndUpdate(
    { _id: req.params.id }, // locate which one we want to update
    req.body, // info from the form we are using to update the one with
    { new: true })
    .then(updatedProduct => {
      res.json({ results: updatedProduct })
    })
    .catch(err =>
      res.json({ err: err, message: "Something went wrong." }));
};
// --------------- DELETE ---------------- //
module.exports.deleteOneProduct = (req, res) => {
  Product.deleteOne({ _id: req.params.id })
    .then(deletedProduct => {
      res.json({ results: deletedProduct })
    })
    .catch(err =>
      res.json({ err: err, message: "Something went wrong." }));
};