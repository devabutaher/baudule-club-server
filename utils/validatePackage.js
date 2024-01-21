const Error = require("http-errors");

const validatePackage = (data) => {
  const {
    name,
    categories,
    division,
    district,
    duration,
    price,
    minMembers,
    maxMembers,
    tourLocation,
    mapUrl,
  } = data;

  if (
    (!name,
    !categories,
    !division,
    !district,
    !duration,
    !price,
    !minMembers,
    !maxMembers,
    !tourLocation,
    !mapUrl)
  ) {
    throw Error(400, "All fields are required");
  }
};

module.exports = validatePackage;
