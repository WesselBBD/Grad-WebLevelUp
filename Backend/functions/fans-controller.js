const db = require('../services/query-db');

const badRequest = { statusCode: 400 };

const getAllFans = async () => {
  const { recordsets } = await db.query("SELECT * FROM [Fan]");

  if (recordsets === undefined) {
    return badRequest;
  }

  return {
    statusCode: 200,
    body: JSON.stringify(recordsets[0])
  };
}

const getFanByID = async (event) => {
  const { id } = event.pathParameters;

  if (id === undefined) {
    return badRequest;
  }

  const response = await db.query(`SELECT * FROM [Fan] WHERE FanId = '${id}'`);

  if (response === undefined) {
    return badRequest;
  }

  const records = response.recordsets[0][0];

  if (records === undefined) {
    return badRequest;
  }

  return {
    statusCode: 200,
    body: JSON.stringify(records),
  };
}

module.exports = { getAllFans, getFanByID };