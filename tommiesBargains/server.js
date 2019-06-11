const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const keys = require("./keys");

// Connect to Mongoose
const mongoose = require("mongoose");
mongoose
  .connect(keys.mongoDBUrl, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Atlas Connected"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", express.static("public"));

var data = [];
app.post("/api", function(req, res) {
  const sellerEmail = req.body.selleremail;
  const sellerName = req.body.sellername;
  const sellerCity = req.body.sellercity;
  const sellerState = req.body.sellerstate;
  const productName = req.body.productname;
  const productPrice = req.body.productprice;

  const temp = {
    selleremail: sellerEmail,
    sellername: sellerName
  };

  data.push(temp);
  console.log(data);

  const reply = `${sellerName} from ${sellerCity}, ${sellerState} is selling a ${productName} for $${productPrice}`;

  res.send(reply);
});

app.get("/showprofile/:sellername", function(req, res) {
  const seller = req.params.sellername;
  console.log(seller);

  res.send("show profile working");
});

app.get("/getallsellers", function(req, res) {
  res.send(data);
});

app.listen(port, () =>
  console.log(`Tommie's Bargain App is running on port: ${port}`)
);
