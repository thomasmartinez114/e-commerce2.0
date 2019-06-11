const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sellerSchema = new Schema({
  sellername: String,
  selleremail: String
});

module.exports = mongoose.model("Seller", sellerSchema);
