const express = require("express");
const router = express.Router();
const {
  getAllPackages,
  getPackageById,
  updatePackage,
  deletePackage,
  createPackage,
} = require("../controller/packageController");

router.route("/").get(getAllPackages).post(createPackage);
router
  .route("/:id")
  .get(getPackageById)
  .put(updatePackage)
  .delete(deletePackage);

module.exports = router;
