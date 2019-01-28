var db = require("../models");

module.exports = {
  findById: (req, res) => {
    db.User.find(req.params)
      .then(result => res.json(result))
      .catch(err => res.status(422).json(err));
  },
  create: (req, res) => {

    console.log(req.body);
    
    db.User.create(req.body)
      .then(result => res.json(result))
      .catch(err => res.status(422).json(err));
  },

  update: (req, res) => {
    db.User.findByIdAndUpdate({})
  }
  
};
