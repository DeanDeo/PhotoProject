var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var photoSchema = new Schema({

  path:  { type: String },

  photographer: [{type: Schema.Types.ObjectId, ref: 'User'}]


  });
  

module.exports = mongoose.model('Photos', photoSchema);