const asyncHandler = require("express-async-handler");
const Error = require("http-errors");
const Package = require("../model/packageModel");

const filterPackages = asyncHandler(async (req, res) => {
  const { categories, division, duration } = req.query;

  const filter = {};

  // filter packages by categories
  const categoryArray = categories.split(",");

  if (categoryArray.length === 1) {
    filter.categories = categoryArray[0];
  } else {
    filter.categories = { $in: categoryArray };
  }

  // filter packages by division
  if (division) {
    filter.division = division;
  }

  // filter packages by duration
  // const durationRange = duration.split("-");

  if (duration) {
    filter.duration = { $lte: parseInt(duration) };
  }

  const filteredPackages = await Package.find(filter);

  res.json({
    results: filteredPackages.length,
    data: filteredPackages,
  });
});

module.exports = filterPackages;
