const express = require("express");
const {
  getAllCategories,
  createCategory,
  deleteCategory,
  getSingleCategory,
} = require("../controller/categoryController");
const router = express.Router();

router.route("/").get(getAllCategories).post(createCategory);
router.route("/:id").get(getSingleCategory).delete(deleteCategory);

module.exports = router;
