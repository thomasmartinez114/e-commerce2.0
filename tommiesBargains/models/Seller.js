const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sellerSchema = new Schema({
  selleremail: String,
  sellername: String,
  sellercity: String,
  sellerstate: String,
  productname: String,
  productprice: Number
});

module.exports = mongoose.model("Seller", sellerSchema);
