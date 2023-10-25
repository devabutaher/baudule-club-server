const Error = require("http-errors");

const errorHandler = (error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    status: error.status,
    message: error.message,
    stack: error.stack,
  });
};

const errorRouter = (req, res, next) => {
  next(Error(404, "Route Not Found"));
};

module.exports = { errorHandler, errorRouter };
