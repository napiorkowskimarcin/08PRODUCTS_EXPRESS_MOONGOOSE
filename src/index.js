const express = require("express");
const mongoose = require("mongoose");
const config = require("./config");
const productController = require("../controllers/products");

mongoose
  .connect(config.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    const app = express();
    app.use(express.json());
    app.get("/products", productController.findProducts);
    app.get("/product/:id", productController.findProduct);
    app.post("/products", productController.createProducts);
    app.listen(8000, () => {
      console.log("server has started");
    });
  })
  .catch(() => {
    console.log("no database connection");
  });
