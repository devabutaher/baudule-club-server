const Error = require("http-errors");

const validatePackage = (data) => {
  const { name, categories, division, duration } = data;
  
  if ((!name, !categories, !division, !duration)) {
    throw Error(400, "All fields are required");
  }
};

module.exports = validatePackage;
