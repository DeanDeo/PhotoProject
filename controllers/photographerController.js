const db = require("../models");
// console.log(db.Photographer);
// Defining methods for the PhotographersController
module.exports = {
  findAll: function (req, res) {
    db.User
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.User
      .findByIdAndUpdate(req.params.id, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByLocation: function (req, res) {
    console.log(req.body.location)
    db.User
      .find({ location: req.body.location })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};