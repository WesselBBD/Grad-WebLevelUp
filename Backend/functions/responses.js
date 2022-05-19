const badRequest = {
  statusCode: 400,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true,
  },
};
const serverError = {
  statusCode: 500,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true,
  },
};

module.exports = { badRequest, serverError };
