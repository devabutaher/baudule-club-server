const express = require("express");
const filterPackages = require("../controller/filterController");
const router = express.Router();

router.route("/").get(filterPackages);

module.exports = router;
