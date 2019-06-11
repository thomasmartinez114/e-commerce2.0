const express = require("express");
const bodyParser = require("body-parser");
const api = require("./routes/api");
const app = express();
const port = 3000;
const keys = require("./keys");
const Seller = require("./models/Seller");

// Connect to Mongoose
const mongoose = require("mongoose");
mongoose
  .connect(keys.mongoDBUrl, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Atlas Connected"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", express.static("public"));

app.use("/api", api);

app.listen(port, () =>
  console.log(`Tommie's Bargain App is running on port: ${port}`)
);
