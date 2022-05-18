require("dotenv/config");
const mysql = require("mysql");

module.exports.query = async (queryString) => {
  const connection = mysql.createConnection({
    host: process.env.DB_SERVER,
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME,
  });

  try {
    connection.connect();

    return new Promise((resolve, reject) => {
      connection.query(queryString, function (err, rows) {
        if (rows === undefined) {
          reject(new Error("No Data"));
        }
        resolve(rows);
      });

      connection.end();
    });
  } catch (error) {
    return undefined;
  }
};
