const express = require('express');
const app = express();
const PORT = 8080;
const client = require('./db/client');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const { COOKIE_SECRET } = require('./secrets')
const cookieParser = require('cookie-parser')

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser(COOKIE_SECRET));

client.connect();

app.get('/', (req, res) => {
    res.send("Hello World!");
});

app.use('/api', require('./api'));

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});