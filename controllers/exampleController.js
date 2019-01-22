const db = require("../models");

// Define and export controller methods here

module.exports = {
  findAll: (req, res) => {
    db.Example.find(req.query)
      .sort({ date: -1 })
      .then(dbExample => res.json(dbExample))
      .catch(err => res.status(422).json(err));
  }
};
