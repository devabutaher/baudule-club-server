const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const connectDB = require("./config/connectDB");
const { errorHandler, errorRouter } = require("./middleware/errorHandler");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
connectDB();

app.get("/", (req, res) => {
  res.status(200).json({ message: `Server listening on port ${port}` });
});

// use error handler
app.use(errorHandler);
app.use(errorRouter);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
