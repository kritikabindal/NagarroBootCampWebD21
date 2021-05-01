const express = require("express");
const router = express.Router();
const Product = require("../models/product");

//display all the products
router.get("/products", async (req, res) => {
  const products = await Product.find({});
  res.render("products/index", { products });
});

//get the form for new products
router.get("/products/new", (req, res) => {
  res.render("products/new");
});

//Create  New Product

router.post("/products", async (req, res) => {
  // console.log(req.body.product);
  await Product.create(req.body.product);
  res.redirect("/products");
});

//show particular product
router.get("/products/:id", async (req, res) => {
  // console.log("idd:",  params.id)

  const product = await Product.findById(req.params.id);
  res.render("products/show", { product });
});

//get the edit form
router.get("/products/:id/edit", async (req, res) => {
  const product = await Product.findById(req.params.id);
  // console.log(product);
  res.render("products/edit", { product });
});

//update the particular product
router.patch("/products/:id", async (req, res) => {
 
  await Product.findByIdAndUpdate(req.params.id, req.body.product);
  res.redirect(`/products/${req.params.id}`);
});

//delete a particular product
router.delete("/products/:id", async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.redirect("/products");
});

module.exports = router;
