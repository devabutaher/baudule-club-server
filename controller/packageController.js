const asyncHandler = require("express-async-handler");
const Package = require("../model/packageModel");
const Error = require("http-errors");
const validatePackage = require("../utils/validatePackage");

// get package by id
const getPackageById = asyncHandler(async (req, res) => {
  const package = await Package.findById(req.params.id);

  if (!package) {
    throw Error(404, "Package not found");
  }

  res.status(200).json(package);
});

// create package
const createPackage = asyncHandler(async (req, res) => {
  const packageData = req.body;

  // validate package
  validatePackage(packageData);

  // package exists
  const packageExists = await Package.findOne({ name: packageData.name });

  if (packageExists) {
    throw Error(400, "Package already exists");
  }

  const package = await Package.create({ ...packageData, availability: true });

  res.status(201).json({ success: true, data: package });
});

// update package
const updatePackage = asyncHandler(async (req, res) => {
  const packageId = req.params.id;
  const packageData = req.body;

  // validate package
  validatePackage(packageData);

  const package = await Package.findByIdAndUpdate(packageId, packageData, {
    new: true,
    runValidators: true,
  });

  if (!package) {
    throw Error(404, "Package not found");
  }

  res.status(200).json({ success: true, data: package });
});

// delete package
const deletePackage = asyncHandler(async (req, res) => {
  const package = await Package.findById(req.params.id);

  if (!package) {
    throw Error(404, "Package not found");
  }

  await package.deleteOne();

  res.status(200).json({ success: true, data: package });
});

module.exports = {
  createPackage,
  getPackageById,
  updatePackage,
  deletePackage,
};
