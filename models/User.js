var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  firstName:{
    type:String
  },
  lastName:{
    type:String
  },
  user:{
    type:String
  },
  email:{
    type: String,
    // unique: true
  },
  uid: {
    type: String,
    unique: true
  },
  location:{
    type: String
  },
  phoneNumber:{
    type:String
  },
  // photos: [{ type: Schema.Types.ObjectId, ref: 'Photo' }],
  // location: {
  //   type: String,
  // },
  instagram: {
    type: String,
    // unique: true
  },
  portfolio:{
    type: String,
    // unique: true
  },
  bio:{
    type: String
  },
  photographer:{
    type: Boolean, 
    default: false
  }
});

var User = mongoose.model("User", UserSchema);

module.exports = User;