const express = require("express");
const {
  getAllCategories,
  createCategory,
  deleteCategory,
} = require("../controller/categoryController");
const router = express.Router();

router.route("/").get(getAllCategories).post(createCategory);
router.route("/:id").delete(deleteCategory);

module.exports = router;
