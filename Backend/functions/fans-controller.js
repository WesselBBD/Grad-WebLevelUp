const db = require("../services/query-db");

const badRequest = { statusCode: 400 };
const serverError = { statusCode: 500 };

const normalizeNaming = (data) =>
  data.map(({ "BIN_TO_UUID(`F`.`FanId`,true)": id, ...rest }) => ({
    id,
    ...rest,
  }));

const filterFans = async ({ category, rpm, cfm, sweep }) => {
  try {
    // Need to use proc
    const data = await db.query(`SELECT *
    FROM vFullFans AS F
    WHERE F.FanRPM <= ${rpm}
    AND F.FanCFM <= ${cfm}
    AND F.FanSpanMM <= ${sweep}
    AND F.FanCategoryName = '${category}';`);

    const response = normalizeNaming(data);

    return {
      statusCode: 200,
      body: JSON.stringify(response),
    };
  } catch (error) {
    return serverError;
  }
};

const getFans = async (event) => {
  if (!event.queryStringParameters) {
    try {
      const data = await db.query("SELECT * FROM vFullFans;");
      const response = normalizeNaming(data);

      return {
        statusCode: 200,
        body: JSON.stringify(response),
      };
    } catch (error) {
      return serverError;
    }
  }

  const { category, rpm, cfm, sweep } = event.queryStringParameters;

  if (
    category === undefined ||
    rpm === undefined ||
    cfm === undefined ||
    sweep === undefined
  ) {
    return badRequest;
  }

  return filterFans({ category, rpm, cfm, sweep });
};

module.exports = { getFans };
