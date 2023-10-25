const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const packageSchema = new Schema({
  location: {
    type: String,
    required: true,
  },
  coverimg: {
    type: String,
    required: true,
  },
  pickup: {
    type: String,
    required: true,
  },
  minmember: {
    type: Number,
    required: true,
  },
  maxmember: {
    type: Number,
    required: true,
  },
  amount: {
    type: Number,
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
  information: [
    {
      desc: {
        type: String,
        required: true,
      },
    },
  ],
  inorexclu: [
    {
      in: [
        {
          type: String,
          required: true,
        },
      ],
      out: [
        {
          type: String,
          required: true,
        },
      ],
    },
  ],
  description: [
    {
      desc: {
        type: String,
        required: true,
      },
      facilitated: [
        {
          type: String,
          required: true,
        },
      ],
      hopdestination: [
        {
          type: String,
          required: true,
        },
      ],
      food: {
        welcome: {
          type: String,
          required: true,
        },
        lunch: {
          type: String,
          required: true,
        },
        evening: {
          type: String,
          required: true,
        },
      },
    },
  ],
  additional: [
    {
      type: String,
      required: true,
    },
  ],
  tips: [
    {
      type: String,
      required: true,
    },
  ],
  images: [
    {
      img: {
        type: String,
        required: true,
      },
    },
  ],
  mapURL: {
    type: String,
    required: true,
  },
});

const Package = mongoose.model("Package", packageSchema);

module.exports = Package;
