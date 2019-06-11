const express = require("express");
const router = express.Router();
const Seller = require("../models/Seller");

router.get("/", (req, res) => res.send("api route is working!"));

router.post("/", function(req, res) {
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

router.get("/getallsellers", function(req, res) {
  Seller.find().then(results => {
    console.log(results);
    res.send(results);
  });
});

router.get("/showprofile/:selleremail", function(req, res) {
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

module.exports = router;
