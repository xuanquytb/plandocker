const mysql = require("mysql2");

const dbConn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

dbConn.connect(function (err) {
  if (err) throw err;
  console.log("Đã kết nối cơ sở dữ liệu");
});

module.exports = dbConn;
