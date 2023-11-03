const asyncHandler = require("express-async-handler");
const Error = require("http-errors");
const Category = require("../model/categoryModel");
const validateCategory = require("../utils/validateCategory");

// get all categories
const getAllCategories = asyncHandler(async (req, res) => {
  const categories = await Category.find();

  if (!categories) {
    throw Error(404, "No categories found");
  }

  res.status(200).json({ results: categories.length, data: categories });
});

// create category
const createCategory = asyncHandler(async (req, res) => {
  // category validation
  validateCategory(req.body);

  // category exists
  const categoryExists = await Category.findOne(req.body);
  if (categoryExists) {
    throw Error(400, "Category already exists");
  }

  const category = await Category.create(req.body);
  await category.save();
  res.status(201).json(category);
});

const updateCategory = asyncHandler(async (req, res) => {
  const categoryId = req.params.id;
  const categoryData = req.body;

  const category = await Category.findByIdAndUpdate(categoryId, categoryData, {
    new: true,
  });

  if (!category) {
    throw Error(404, "Category not found");
  }

  res.status(200).json(category);
});

// delete category
const deleteCategory = asyncHandler(async (req, res) => {
  const category = await Category.findById(req.params.id);

  if (!category) {
    throw Error("Cannot find category");
  }

  await Category.delete(category);

  res.status(200).json(category);
});

module.exports = {
  getAllCategories,
  createCategory,
  updateCategory,
  deleteCategory,
};
