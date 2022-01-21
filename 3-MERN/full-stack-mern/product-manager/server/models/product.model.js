const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  title: String,
  price: Number,
  description: String
}, { timestamps: true });

module.exports = mongoose.model('Product', ProductSchema);
// Or you can export like this:
// const Product = mongoose.model('Product', ProductSchema);
// module.exports = Product;
