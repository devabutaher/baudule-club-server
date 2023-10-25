const express = require("express");
const router = express.Router();
const {
  getAllPackages,
  getPackageById,
  updatePackage,
  deletePackage,
  createPackage,
} = require("../controller/packageController");

router.get("/", getAllPackages, createPackage);
router.get("/:id", getPackageById, updatePackage, deletePackage);

module.exports = router;
