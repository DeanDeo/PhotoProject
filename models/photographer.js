const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const photographerSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    location: { type: String, required: true },
    phoneNumber: String,
    instagram: String,
    bio: String,
});

const Photographer = mongoose.model("Photographer", photographerSchema);

module.exports = Photographer;