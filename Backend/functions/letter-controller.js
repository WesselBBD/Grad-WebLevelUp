const db = require("../services/query-db");
const { badRequest, serverError } = require('./responses');

const postContactDetails = async (event) => {
  const body = JSON.parse(event.body);

  if (body === undefined) {
    return badRequest;
  }

  const { name, surname, email, category } = body;

  if (!name || !surname || !email || !category) {
    return badRequest;
  }

  // db.query(`INSERT INTO NewsLetter (name, surname, email, category) VALUES ('${name}', '${surname}', '${email}', '${category})'`);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: `${name} ${surname} saved successfully.`})
  };
}

module.exports = { postContactDetails };