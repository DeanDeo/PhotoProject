const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//define and export a model like so:

const exampleSchema = new Schema(
  {
    _id: { type: Schema.Types.ObjectId, required: true },
    title: { type: String, required: true }
  },
  { _id: false }
);

const Example = mongoose.model("Example", exampleSchema);

module.exports = Example;
