var db = require("../models");

module.exports = {
  find: (req, res) => {
    db.User.find(req.params)
      .then(result => {
        res.json(result)
      })
      .catch(err => res.status(422).json(err));
  },
  findById: (req, res) => {
    db.User.findById(req.params.id)
      .then(result => {
        res.json(result)
      })
      .catch(err => res.status(422).json(err));
  },
  create: (req, res) => {
    db.User.create(req.body)
      .then((result) => {
        res.json(result)
      })
      .catch((err) => {
        res.status(422).json(err)
      })
  },

  photographerUpdate: (req, res) => {
    const data = req.body
    db.User.findByIdAndUpdate(data.id,
      {
        $set: {
          name: data.nameInput,
          email: data.emailInput,
          instagram: data.instagramInput,
          portfolio: data.portfolioInput,
          location: data.locationInput,
          bio: data.bioInput
        }
      }).then(result => {
        res.json(result)
      })

  }

};
