var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: {
    type: String
  },
  uid: {
    type: String,
    unique: true
  }
});

var User = mongoose.model("User", UserSchema);

module.exports = User;