const { Player } = require('../models/player.model');

// ------------ RETRIEVE ALL ------------- //
module.exports.findAllPlayers = (req, res) => {
  console.log("Finding all...")
  Player.find()
    .then(allPlayers => {
      res.json({ results: allPlayers })
    })
    .catch(err =>
      res.status(400).json(err));
};
// --------------- CREATE ---------------- //
module.exports.createNewPlayer = (req, res) => {
  console.log("Creating new...")
  Player.create(req.body)
    .then(newlyCreatedPlayer => res.json({ results: newlyCreatedPlayer }))
    .catch(err => res.status(400).json(err));
};
// ------------ RETRIEVE ONE ------------- //
module.exports.findOnePlayer = (req, res) => {
  console.log("Finding one...")
  Player.findOne({ _id: req.params.id })
    .then(onePlayer => {
      res.json({ results: onePlayer })
    })
    .catch(err =>
      res.status(400).json(err));
};
// --------------- UPDATE ---------------- //
module.exports.updateExistingPlayer = (req, res) => {
  Player.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true, runValidators: true })
    .then(updatedPlayer => {
      res.json({ results: updatedPlayer })
    })
    .catch(err =>
      res.status(400).json(err));
};
// --------------- DELETE ---------------- //
module.exports.deleteOnePlayer = (req, res) => {
  Player.deleteOne({ _id: req.params.id })
    .then(deletedPlayer => {
      res.json({ results: deletedPlayer })
    })
    .catch(err =>
      res.status(400).json(err));
};