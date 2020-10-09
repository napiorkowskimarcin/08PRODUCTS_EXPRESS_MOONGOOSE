const express = require("express");
const mongoose = require("mongoose");
const config = require("./src/config");
const productController = require("./controllers/products.js");
const path = require('path');
const router = express.Router();
const appService = require('./src/index.js')
const app = express();

app.listen(8000, () => {
    console.log("server has started");
});

app.use(express.json());
mongoose
    .connect(config.db, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('connected')
    })
    .catch(() => {
        console.log("no database connection");
    });

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'))
})

app.get('/Products.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/Products.html'))
})

app.get("/products", productController.findProducts);
app.get("/product/:id", productController.findProduct);
// app.post("/products", productController.createProducts);

//appService(app);