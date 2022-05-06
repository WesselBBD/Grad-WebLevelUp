const db = require('../services/query-db');

const badRequest = { statusCode: 400 };
const serverError = { statusCode: 500 };

const getAllFans = async () => {
  try {
    const { recordsets } = await db.query("SELECT * FROM [Fan]");

  if (recordsets === undefined) {
    return badRequest;
  }

  return {
    statusCode: 200,
    body: JSON.stringify(recordsets[0])
  };
  } catch (error) {
    return serverError;
  }
}

const getFanByID = async (event) => {
  try {
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
  } catch (error) {
    return serverError;
  }
}

module.exports = { getAllFans, getFanByID };