require('dotenv/config');
const sql = require('mssql');

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME,
  server: process.env.DB_SERVER,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    trustServerCertificate: true // true for local, false for deployed
  }
}

module.exports.query = async (queryString) => {
  try {
    const pool = await sql.connect(config);

    const response = await pool.request().query(queryString);

    return response;
  } catch (error) {
    return undefined;
  }
}
