const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const packageSchema = Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  categories: {
    type: [String],
    required: true,
  },
  division: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  tourLocation: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  minMembers: {
    type: Number,
  },
  maxMembers: {
    type: Number,
  },
  description: {
    type: String,
  },
  mapUrl: {
    type: String,
    required: true,
  },
  availability: {
    type: Boolean,
  },
  // inclusions: {
  //   type: [String],
  // },
  // exclusions: {
  //   type: [String],
  // },
  // images: {
  //   type: [String],
  //   required: true,
  // },
  // reviews: {
  //   type: [String],
  // },
});

const Package = mongoose.model("Package", packageSchema);

module.exports = Package;
