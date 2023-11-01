const Error = require("http-errors");

const validateCategory = (data) => {
  const { title } = data;
  if (!title) {
    throw Error(400, "Please fill all fields");
  }
};

module.exports = validateCategory;
