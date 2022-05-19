const db = require("../services/query-db");
const { badRequest, serverError } = require('./responses');

const postContactDetails = async (event) => {
  const body = JSON.parse(event.body);

  if (body === undefined) {
    return badRequest;
  }

  const { name, surname, email, categoryId } = body;

  if (!name || !surname || !email || !categoryId) {
    return badRequest;
  }

  db.query(`INSERT INTO User (UserName, UserEmail, CategoryId) VALUES ('${name} ${surname}', '${email}', '${categoryId}');`)

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify({ message: `${name} ${surname} saved successfully.`})
  };
}

module.exports = { postContactDetails };