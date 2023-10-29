const Error = require("http-errors");

const errorHandler = (error, req, res, next) => {
  const status = error.status || 500;
  const message = error.message || "Internal Server Error";
  res.status(status).json({ status, message });
};

const errorRouter = (req, res, next) => {
  next(Error(404, "Route Not Found"));
};

module.exports = { errorHandler, errorRouter };
