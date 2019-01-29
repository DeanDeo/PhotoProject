const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    location: { type: String, required: true },
    phoneNumber: String,
    instagram: String,
    bio: String,
});

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;