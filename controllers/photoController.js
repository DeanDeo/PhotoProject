var db = require("../models");



module.exports = {

  create: (req, res) => {
    db.Photo.create(req)
      .then(result => {
        
      })
      .catch(err => console.log(err));
  },
  findbyid:(req, res) => {
    db.Photo.findById(req.body.id).then(result =>{}).catch(err => res.status(422).json(err));
  },
  populatePhotos: (req, res)=>{
    
    db.Photo.find({photographer: req.params.id}).then(result=>{
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
      
      
      db.Photo.findOneAndUpdate({photographer: req.body.id, main_photo: true},{$set:{main_photo:false}}).then(result=>{
        db.Photo.findOneAndUpdate({_id: req.body.picId},{$set:{main_photo:true}}).then(response=>{
          
          res.json(response)
        })
      }).catch(err => res.status(422).json(err));
    },
    updateProfile:(req, res) =>{
      db.Photo.findOneAndUpdate({photographer: req.body.id, profile_photo: true},{$set:{profile_photo:false}}).then(result=>{
        db.Photo.findOneAndUpdate({_id: req.body.picId},{$set:{profile_photo:true}}).then(response=>{
          res.json(response)
        })
      }).catch(err => res.status(422).json(err));
    }
};
