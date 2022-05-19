const db = require("../services/query-db");
const { badRequest, serverError } = require('./responses');

const normalizeNaming = (data) =>
  data.map(({ "BIN_TO_UUID(`F`.`FanId`,true)": id, ...rest }) => ({
    id,
    ...rest,
  }));

const filterFans = async ({ category, rpm, cfm, sweep }) => {
  try {
    const [data] = await db.query(
      `CALL pGetFansByAtributes(${rpm}, ${cfm}, ${sweep}, '${category}');`
    );
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
