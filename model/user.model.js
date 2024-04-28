const mongooes = require("mongoose");

const userschema = new mongooes.Schema({
  FullName: String,
  Age: String,
  Email: String,
  Password: String,
  DateOfBirth: String,
});
module.exports = mongooes.model("user", userschema);
