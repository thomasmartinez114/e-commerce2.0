const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello world'));

app.get('/api', (req, res) => res.send('API route working'));

app.listen(port, () => console.log(`App is listening on port ${port}!`));

