const testFunction = async (event) => {
  const response = {
    name: "Fan 3000",
    brand: "Super",
    year: "2021",
    description: "This is a fan. A real nice fan",
    price: {
      currency: "ZAR",
      amount: 159.99,
    },
  };

  return {
    statusCode: 200,
    body: JSON.stringify(response),
  };
};

module.exports = { testFunction };
