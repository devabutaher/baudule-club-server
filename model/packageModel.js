const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// package name
// categories
// division
// duration
// minimum members
// maximum members
// tour location
// pickup location
// description
// price
// availability
// inclusions
// exclusions
// meals
// cover picture
// images
// reviews
// offers
// additional
// map url

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
  duration: {
    type: Number,
    required: true,
  },
  // minimumMembers: {
  //   type: Number,
  //   required: true,
  // },
  // maximumMembers: {
  //   type: Number,
  //   required: true,
  // },
  // tourLocation: {
  //   type: String,
  //   required: true,
  // },
  // pickupLocation: {
  //   type: String,
  //   required: true,
  // },
  // description: {
  //   type: String,
  //   required: true,
  // },
  // price: {
  //   type: Number,
  //   required: true,
  // },
  // availability: {
  //   type: Boolean,
  //   required: true,
  // },
  // inclusions: {
  //   type: [String],
  //   required: true,
  // },
  // exclusions: {
  //   type: [String],
  //   required: true,
  // },
  // meals: {
  //   type: [String],
  //   required: true,
  // },
  // coverPic: {
  //   type: [String],
  //   required: true,
  // },
  // images: {
  //   type: [String],
  //   required: true,
  // },
  // reviews: {
  //   type: [String],
  //   required: true,
  // },
  // offers: {
  //   type: [String],
  //   required: true,
  // },
  // additional: {
  //   type: String,
  //   required: true,
  // },
  // mapUrl: {
  //   type: String,
  //   required: true,
  // },
});

const Package = mongoose.model("Package", packageSchema);

module.exports = Package;
