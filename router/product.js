const express = require("express");
let router = express.Router();
let productController = require("../controller/product");

exports.routes = router
  .post("/products", productController.createProduct)
  .get("/products", productController.getAllProduct)
  .get("/products/:id", productController.getProduct)
  .patch("/products/:id", productController.updateProduct)
  .put("/products/:id", productController.replaceProduct)
  .delete("/products/:id", productController.deleteProduct);
