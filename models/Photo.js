var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var photoSchema = new Schema({

  path:  { type: String },

  photographer: [{type: Schema.Types.ObjectId, ref: 'User'}],

  main_photo: {type:Boolean, default: false},

  profile_photo: {type:Boolean, default: false}


  });
  

module.exports = mongoose.model('Photos', photoSchema);