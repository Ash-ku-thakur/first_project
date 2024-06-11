const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  title: String,
  description: String,
  category: String,
  price: Number,
  discount: Number,
  rating: Number,
  brand: String,
  images: [String],
  thumbnail: String,
});

exports.product = mongoose.model("product", productSchema);
