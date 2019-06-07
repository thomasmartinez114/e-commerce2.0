const express = require('express')
const bodyParser = require('body-parser');
const keys = require('./keys');
const User = require('./models/User');
const api = require("./routes/api");
const app = express()
const port = 4000

// Connecting mongoDB
const mongoose = require('mongoose');
mongoose.connect(keys.mongoDBUrl, { useNewUrlParser: true }).then(() => console.log("DB connected"));

app.use(bodyParser.json());
app.use('/', express.static("public"));

app.use('/api', api);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))