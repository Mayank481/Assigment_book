const mongooes = require("mongoose");
const { Schema } = require("mongoose");

const bookschema = new mongooes.Schema({
  Title: String,
  Price: String,
  PublisheOn: String,
  Author: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  Status: String,
  View: String,
});
module.exports = mongooes.model("books", bookschema);
