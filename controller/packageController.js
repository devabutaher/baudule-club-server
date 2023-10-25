const asyncHandler = require("express-async-handler");
const Package = require("../model/packageModel");
const Error = require("http-errors");

// get all packages
const getAllPackages = asyncHandler(async (req, res) => {
  const packages = await Package.find();
  res.status(200).json(packages);
});

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
  const package = await Package.create(req.body);
  res.status(201).json(package);
});

// update package
const updatePackage = asyncHandler(async (req, res) => {
  const packageId = req.params.id;
  const updatePackageData = req.body;

  const updatePackage = await Package.findByIdAndUpdate(
    packageId,
    updatePackageData,
    {
      new: true,
    }
  );

  if (!updatePackage) {
    throw Error(404, "Package not found");
  }

  res.status(200).json(updatePackage);
});

// delete package
const deletePackage = asyncHandler(async (req, res) => {
  const deletedPackage = await Package.findByIdAndDelete(req.params.id);

  if (!deletedPackage) {
    throw Error(404, "Package not found");
  }

  res.status(200).json(deletedPackage);
});

module.exports = {
  createPackage,
  getAllPackages,
  getPackageById,
  updatePackage,
  deletePackage,
};
