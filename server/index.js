const express = require('express');
const app = express();
const PORT = 8080;
const client = require('./db/client');
const cors = require('cors');

app.use(cors());

client.connect();

app.get('/', (req, res) => {
    res.send("Hello World!");
});

app.use('/api', require('./api'));

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});