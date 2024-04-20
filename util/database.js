const mysql = require("mysql2");

const pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "997760",
  database: "node_complete",
});

module.exports = pool.promise();
