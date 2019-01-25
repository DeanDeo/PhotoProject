var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true,
    unique: true
  },
  uid: {
    type: String,
    unique: true
  },
  photos: [{ type: Schema.Types.ObjectId, ref: 'Photo' }],
  location: {
    type: String,
    required: true
  },
  instagram: {
    type: String,
    unique: true
  },
  portfolio:{
    type: String,
    unique: true
  },
  bio:{
    type: String
  }
});

var User = mongoose.model("User", UserSchema);

module.exports = User;