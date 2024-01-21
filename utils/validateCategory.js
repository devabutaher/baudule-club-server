const Error = require("http-errors");

const validateCategory = (data) => {
  const { title, icon } = data;
  if ((!title, !icon)) {
    throw Error(400, "Please fill all fields");
  }
};

module.exports = validateCategory;
