require("dotenv").config();
const express = require("express");
let app = express();
const cors = require("cors");
let productRouter = require("./router/product");
const mongoose = require("mongoose");
const path = require("path");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, process.env.PUBLIC_DIR)));
app.use("/api", productRouter.routes);
app.use("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "dist", "index.html"));
});

// db connection

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  console.log('db connected');
}

app.listen(process.env.PORT);
