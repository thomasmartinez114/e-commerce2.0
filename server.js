const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/', express.static('public'));

app.get('/', (req, res) => res.send('Hello world'));

app.post('/api', function (req, res) {
    const userName = req.body.username;
    const userId = req.body.id;
    const message = req.body.message;
    console.log(userName);
    const reply = `${userName} with id of ${userId} is saying ${message}`
    res.send(reply);
})

app.get('/showprofile/:username', function (req, res) {
    const user = req.params.username;
    console.log(user);

    res.send('show profile working');
})


app.listen(port, () => console.log(`App is listening on port ${port}!`));

