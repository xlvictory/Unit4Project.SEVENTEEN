const { Client } = require("pg");
const dbName = "svt_right_here";
const client = new Client(`postgres://svt_right_here_user:rPITKjnsEbwcIYUSOLVtDQcUrHaZDfLL@dpg-cms95uqcn0vc73bevpeg-a/svt_right_here`);


module.exports = client;