require("dotenv/config");
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: process.env.DB_SERVER,
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME,
});

module.exports.query = async (queryString) => {
  try {
    connection.connect();

    return new Promise((resolve, reject) => {
      connection.query(queryString, function (err, rows) {
        connection.end();
        if (rows === undefined) {
          reject(new Error("No Data"));
        }

        resolve(rows);
      });
    });
  } catch (error) {
    return undefined;
  }
};
