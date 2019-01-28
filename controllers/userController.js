var db = require("../models");

module.exports = {
  findById: (req, res) => {
    db.User.find({ uid: req.params.uid })
      .then(result => res.json(result))
      .catch(err => res.status(422).json(err));
  },
  create: (req, res) => {
    db.User.create({ uid: req.body.uid })
      .then(result => res.json(result))
      .catch(err => res.status(422).json(err));
  },

  update: (req, res) => {
    db.User.findByIdAndUpdate({})
  }
  
};
