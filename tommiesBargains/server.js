const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.use('/', express.static('public'));

app.post("/api", function(req, res) {
  const sellerName = req.body.sellername;
  const sellerCity = req.body.sellercity;
  const sellerState = req.body.sellerstate;
  const productName = req.body.productname;
  const productPrice = req.body.productprice;
  const description = req.body.productdescription;

  console.log(sellerName, sellerCity, sellerState, productName, productPrice, description);
  const reply = `${sellerName} from ${sellerCity}, ${sellerState} is selling a ${productName} for $${productPrice}`

  res.send(reply);
});

app.get('/showprofile/:sellername', function(req, res){
    const seller = req.params.sellername;
    console.log(seller)

    res.send('show profile working');
})





app.listen(port, () =>
  console.log(`Tommie's Bargain App is running on port: ${port}`)
);
