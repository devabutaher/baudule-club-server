const express = require("express");
const router = express.Router();
const {
  getAllPackages,
  getPackageById,
  updatePackage,
  deletePackage,
  createPackage,
} = require("../controller/packageController");
const filterPackages = require("../controller/filterController");

router.route("/").get(getAllPackages).post(createPackage);

router
  .route("/:id")
  .get(getPackageById)
  .put(updatePackage)
  .delete(deletePackage);

// router.route("/filter").get(filterPackages);

module.exports = router;
