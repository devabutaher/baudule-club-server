const asyncHandler = require("express-async-handler");
const Error = require("http-errors");
const Category = require("../model/categoryModel");

// get all categories
const getAllCategories = asyncHandler(async (req, res) => {
  const categories = await Category.find();
  res.status(200).json(categories);
});

module.exports = {
  getAllCategories,
};
