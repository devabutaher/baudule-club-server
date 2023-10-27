const express = require("express");
const { getAllCategories } = require("../controller/categoryController");
const router = express.Router();

router.get("/", getAllCategories);
