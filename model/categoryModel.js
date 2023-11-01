const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/*
title
subtitle
icon
image
*/

const categorySchema = new Schema({
  // catId: {
  //   type: Number,
  //   required: true,
  // },
  title: {
    type: String,
    required: true,
    unique: true,
  },
  // subtitle: {
  //   type: String,
  //   required: true,
  // },
  // icon: {
  //   type: String,
  //   required: true,
  // },
  // img: {
  //   type: String,
  //   required: true,
  // },
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
