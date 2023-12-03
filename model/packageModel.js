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
  minimumMembers: {
    type: Number,
  },
  maximumMembers: {
    type: Number,
  },
  tourLocation: {
    type: String,
    required: true,
  },
  pickupLocation: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  availability: {
    type: Boolean,
  },
  inclusions: {
    type: [String],
  },
  exclusions: {
    type: [String],
  },
  meals: {
    type: [String],
  },
  coverPic: {
    type: String,
    required: true,
  },
  images: {
    type: [String],
    required: true,
  },
  reviews: {
    type: [String],
  },
  mapUrl: {
    type: String,
    required: true,
  },
});

const Package = mongoose.model("Package", packageSchema);

module.exports = Package;
