const { Client } = require("pg");
const dbName = "svt_right_here";
const client = new Client(`postgres://localhost:54321/${dbName}`);


module.exports = client;