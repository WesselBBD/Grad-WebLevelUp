const db = require("../services/query-db");

const badRequest = { statusCode: 400 };
const serverError = { statusCode: 500 };

const filterFans = async ({ category, rpm, cfm, sweep }) => {
  try {
    const response = []; // await db.query('CALL filterFans(category, rpm, cfm, sweep))

    return {
      statusCode: 200,
      body: JSON.stringify(response),
    };
  } catch (error) {
    console.log(error);
    return serverError;
  }
};

const getFans = async (event) => {
  console.log(JSON.stringify(event));

  if (event.queryStringParameters !== null) {
    const { category, rpm, cfm, sweep } = event.queryStringParameters;

    if (
      category !== undefined &&
      rpm !== undefined &&
      cfm !== undefined &&
      sweep !== undefined
    ) {
      return filterFans({ category, rpm, cfm, sweep });
    }
  }

  try {
    const data = await db.query("SELECT * FROM vFullFans;");

    response = data.map(({ "BIN_TO_UUID(`F`.`FanId`,true)": id, ...rest }) => ({
      id,
      ...rest,
    }));

    return {
      statusCode: 200,
      body: JSON.stringify(response),
    };
  } catch (error) {
    console.log(error);
    return serverError;
  }
};

module.exports = { getFans };
