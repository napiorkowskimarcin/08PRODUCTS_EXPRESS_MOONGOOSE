const mongoose = require("mongoose");
const {
  Schema
} = mongoose;
const productSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  producer: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
  created: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Product", productSchema);