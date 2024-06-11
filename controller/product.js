// let data = require("../data");
let productModel = require("../model/product");
let Product = productModel.product;

exports.getAllProduct = async (req, res) => {
  try {
    let result = await Product.find({});
    res.send(result);
  } catch (error) {
    console.log(error.massage);
  }
};
exports.getProduct = async (req, res) => {
  try {
    let id = req.params.id;
    let result = await Product.findById({ _id: id });
    res.send(result);
  } catch (error) {
    console.log(error.massage);
  }
};

exports.createProduct = async (req, res) => {
  try {
    let product = new Product(req.body);
    await product.save();
    res.status(201).json({ message: "Product created Succesfully" });
  } catch (error) {
    console.log(error.massage);
  }
};
exports.updateProduct = async (req, res) => {
  try {
    let id = req.params.id;
    let result = await Product.findByIdAndUpdate({ _id: id }, req.body, {
      returnDocument: "after",
    });
    res.status(200).json(result);
  } catch (error) {
    console.log(error.massage);
  }
};
exports.replaceProduct = async (req, res) => {
  try {
    let id = req.params.id;
    let result = await Product.findOneAndReplace({ _id: id }, req.body, {
      returnDocument: "after",
    });
    res.status(200).json(result);
  } catch (error) {
    console.log(error.massage);
  }
};
exports.deleteProduct = async (req, res) => {
  try {
    let id = req.params.id;
    let result = await Product.findByIdAndDelete({ _id: id });
    res.status(200).json(result);
  } catch (error) {
    console.log(error.massage);
  }
};
