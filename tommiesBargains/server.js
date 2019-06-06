const express = require("express");
const app = express();
const port = 3000;

app.get("/api", function(req, res) {
  const sellerName = req.query.sellername;
  const sellerCity = req.query.sellercity;
  const sellerState = req.query.sellerstate;
  const productName = req.query.productname;
  const productPrice = req.query.productprice;
  const description = req.query.description;

  console.log(sellerName, sellerCity, sellerState, productName, productPrice, description);
  const reply = `${sellerName} from ${sellerCity}, ${sellerState} is selling a ${productName} for $${productPrice}`

  res.send(reply);
});

app.get('/showseller/:sellername', function(req, res){
    const seller = req.params.sellername;
    console.log(seller)

    res.send('show seller working');
})





app.listen(port, () =>
  console.log(`Tommie's Bargain App is running on port: ${port}`)
);
