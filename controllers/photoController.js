var db = require("../models");



module.exports = {

  create: (req, res) => {
    db.Photo.create(req)
      .then(result => {
        res.json(result)
        console.log(req)
      })
      .catch(err => res.status(422).json(err));
  },
  findAll:() => {
    db.Photo.findById("5c4b7b5e28f34f3c50c62604").then(result =>console.log("result"))
  }
};
