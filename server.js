const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();
const { errorHandler, errorRouter } = require("./middleware/errorHandler");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.status(200).json({ message: `Server listening on port ${port}` });
});

// use error handler
app.use(errorHandler);
app.use(errorRouter);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
