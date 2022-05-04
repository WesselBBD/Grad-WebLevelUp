import { StatusCodes } from 'http-status-codes';

const getAllFans = async () => {
  const response = {}; // get all fan objects from db

  return {
    statusCode: StatusCodes.OK,
    body: JSON.stringify(response)
  };
}

const getFanByID = async (event) => {
  const { id } = event.pathParameters;

  if (id === null) {
    return { statusCode: StatusCodes.BAD_REQUEST };
  }

  const response = {}; // get all fans with {id}

  return {
    statusCode: StatusCodes.OK,
    body: JSON.stringify(response),
  };
}

module.exports = { getAllFans, getFanByID };