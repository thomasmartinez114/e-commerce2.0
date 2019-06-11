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

app.post("/api", function(req, res) {
  const sellerEmail = req.body.selleremail;
  const sellerName = req.body.sellername;
  const sellerCity = req.body.sellercity;
  const sellerState = req.body.sellerstate;
  const productName = req.body.productname;
  const productPrice = req.body.productprice;

  const data = {
    selleremail: sellerEmail,
    sellername: sellerName
  };
  console.log(data);

  const seller = new Seller(data);
  seller
    .save()
    .then(() => res.send(data))
    .catch(err => console.log(err));

  // const reply = `${sellerName} from ${sellerCity}, ${sellerState} is selling a ${productName} for $${productPrice}`;

  // res.send(reply);
});

app.get("/showprofile/:selleremail", function(req, res) {
  const sellerEmail = req.params.selleremail;
  console.log(sellerEmail);

  Seller.find({ selleremail: sellerEmail })
    .then(result => {
      console.log("Showing", sellerEmail, "profile:", result);
      res.send(result);
    })
    .catch(err => {
      console.log(err);
      res.send(err);
    });
});

app.get("/getallsellers", function(req, res) {
  Seller.find().then(results => {
    console.log(results);
    res.send(results);
  });
});

app.listen(port, () =>
  console.log(`Tommie's Bargain App is running on port: ${port}`)
);
