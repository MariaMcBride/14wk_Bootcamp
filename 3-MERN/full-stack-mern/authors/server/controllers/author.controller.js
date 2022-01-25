const { Author } = require('../models/author.model');

// ------------ RETRIEVE ALL ------------- //
module.exports.findAllAuthors = (req, res) => {
  console.log("Listing all authors...");
  Author.find().sort({
    "name": 1
  })
    .then(allAuthors => {
      res.json({ results: allAuthors })
    })
    .catch(err =>
      res.status(400).json({ err: err, message: "Unable to list all authors." }));
};

// --------------- CREATE ---------------- //
module.exports.createNewAuthor = (req, res) => {
  console.log("Adding an author...");
  Author.create(req.body)
    .then(newlyCreatedAuthor =>
      res.json({ results: newlyCreatedAuthor }))
    .catch(err =>
      res.status(400).json(err));
};

// ------------ RETRIEVE ONE ------------- //
module.exports.findOneAuthor = (req, res) => {
  console.log("Retrieving an author...");
  Author.findOne({ _id: req.params.id })
    .then(oneAuthor => {
      res.json({ results: oneAuthor })
    })
    .catch(err =>
      res.status(400).json({ err: err, message: "Unable to retrieve author." }));
};

// --------------- UPDATE ---------------- //
module.exports.updateExistingAuthor = (req, res) => {
  console.log("Updating author info...");
  Author.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true, runValidators: true })
    .then(updatedAuthor => {
      res.json({ results: updatedAuthor })
    })
    .catch(err =>
      res.status(400).json(err));
};

// --------------- DELETE ---------------- //
module.exports.deleteOneAuthor = (req, res) => {
  console.log("Author has been deleted.");
  Author.deleteOne({ _id: req.params.id })
    .then(deletedAuthor => {
      res.json({ results: deletedAuthor })
    })
    .catch(err =>
      res.status(400).json({ err: err, message: "Unable to delete author." }));
};