var db = require("../models");



module.exports = {

  create: (req, res) => {
    db.Photo.create(req)
      .then(result => {
        console.log("here")
      })
      .catch(err => console.log(err));
  },
  findbyid:(req, res) => {
    db.Photo.findById(req.body.id).then(result =>{
      console.log(result)}).catch(err => res.status(422).json(err));
  },
  populatePhotos: (req, res)=>{
    console.log(req.params.uid)
    db.Photo.find({photographer: req.params.uid}).then(result=>{
      res.json(result) 
    }).catch(err => res.status(422).json(err));
    },
    findAll: (req, res) =>{
      db.Photo.find({}).then(result=>{
        // console.log(result)
        res.json(result)
      }).catch(err => res.status(422).json(err));
    },
    findMain: (req, res) =>{
      db.Photo.find({main_photo: true}).then(result=>{
        // console.log(result)
        res.json(result)
      }).catch(err => res.status(422).json(err));
    },
    updateMain:(req, res) =>{
      console.log(req)
      
      db.Photo.findOneAndUpdate({photographer: req.body.uid, main_photo: true},{$set:{main_photo:false}}).then(result=>{
        db.Photo.findOneAndUpdate({_id: req.body.picId},{$set:{main_photo:true}}).then(response=>{
          console.log(response)
          res.json(response)
        })
      }).catch(err => res.status(422).json(err));
    },
    updateProfile:(req, res) =>{
      db.Photo.findOneAndUpdate({photographer: req.body.uid, profile_photo: true},{$set:{profile_photo:false}}).then(result=>{
        db.Photo.findOneAndUpdate({_id: req.body.picId},{$set:{profile_photo:true}}).then(response=>{
          res.json(response)
        })
      }).catch(err => res.status(422).json(err));
    }
};
