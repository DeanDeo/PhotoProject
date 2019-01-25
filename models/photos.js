var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var photoSchema = new Schema({

  path:  { type: String }


  });

module.exports = mongoose.model('Photos', photoSchema);