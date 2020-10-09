const Product = require("../models/Products.js");
//Importing all of the products that are located on mongoDB atlas
exports.findProducts = async (req, res) => {
  const products = await Product.find();
  res.send({ data: products });
};
//Importing product by name
exports.findProduct = async (req, res) => {
  const products = await Product.findById(req.params.id);
  res.send({ data: products });
};
//Exporting new products on mongoDB atlas
exports.createProducts = async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.send({ data: product });
};
