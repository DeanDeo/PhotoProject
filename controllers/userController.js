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

  photographerUpdate: (req, res) => {
    const data = req.body
    db.User.findByIdAndUpdate(data.uId,
      { $set: {
        name: data.nameInput,
        email: data.emailInput,
        instagram: data.instagramInput,
        portfolio: data.portfolioInput,
        location: data.locationInput,
        bio: data.bioInput }}).then(result =>{
          res.json(result)
        })
  }
  
};
