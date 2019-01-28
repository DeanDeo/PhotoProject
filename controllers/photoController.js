var db = require("../models");



module.exports = {

  create: (req, res) => {
    db.Photo.create(req)
      .then(result => {
      })
      .catch(err => console.log(err));
  },
  findbyid:(req, res) => {
    db.Photo.findById(req.id).then(result =>{
      console.log(result)}).catch(err => res.status(422).json(err));
  },
  populatePhotos: (req, res)=>{
    db.Photo.find({photographer: req.uid}).then(result=>{
      res.json(result) 
      console.log(result)
    }).catch(err => res.status(422).json(err));
    },
    findAll: (req, res) =>{
      db.Photo.find({}).then(result=>{
        // console.log(result)
        res.json(result)
      }).catch(err => res.status(422).json(err));
    },
    findmain: (req, res) =>{
      db.Photo.find({main_photo: true}).then(result=>{
        // console.log(result)
        res.json(result)
      }).catch(err => res.status(422).json(err));
    }
};
