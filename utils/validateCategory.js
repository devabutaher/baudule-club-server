const Error = require("http-errors");

const validateCategories = (data) => {
  const { title } = data;
  if (!title) {
    throw Error(400, "Please fill all fields");
  }
};

module.exports = validateCategories;
