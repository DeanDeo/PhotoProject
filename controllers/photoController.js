var db = require("../models");


const data = 
  {
    type: process.env.type,
    project_id: process.env.project_id,
    private_key_id: process.env.private_key_id,
    private_key: process.env.private_key,
    client_email: process.env.client_email,
    client_id: process.env.client_id,
    auth_uri: process.env.auth_uri,
    token_uri: process.env.token_uri,
    auth_provider_x509_cert_url: process.env.auth_provider_x509_cert_url,
    client_x509_cert_url: process.env.client_x509_cert_url
  }
module.exports = {

  create: (req, res) => {
    try {
      if (fs.existsSync("../final-project-230222-5ae4963fbec8.json")) {
      
      }
  
  else{
    fs.writeFile ("../final-project-230222-5ae4963fbec8.json", JSON.stringify(data), function(err) {
      if (err) throw err;
      console.log('complete');
    });
  
  }
  } catch(err) {
    console.error(err)
  }
  
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
