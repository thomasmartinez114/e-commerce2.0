const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Hello World"));

app.listen(port, () =>
  console.log(`Tommie's Bargain App is running on port: ${port}`)
);
