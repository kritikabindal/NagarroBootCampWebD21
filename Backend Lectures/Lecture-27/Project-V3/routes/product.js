const express = require("express");
const router = express.Router();
const Product = require("../models/product");
const Review = require("../models/review");

//display all the products
router.get("/products", async (req, res) => {
  try {
    const products = await Product.find({});
    // res.render("products/index", { products, msg: req.flash("success") });
    res.render("products/index", { products });
  } catch (e) {
    console.log("Something went wrong");
    req.flash("error", "cannot find product");
    res.render("error");
  }
});

//=============================

//get the form for new products
router.get("/products/new", (req, res) => {
  res.render("products/new");
});

//============================
//Create  New Product

router.post("/products", async (req, res) => {
  try {
    // console.log(req.body.product);
    await Product.create(req.body.product);
    req.flash("success", "Product Created Successfully");
    res.redirect("/products");
  } catch (e) {
    console.log(e.message);
    req.flash("error", "cannot create product");
    res.render("error");
  }
});
//===============================

//show particular product
router.get("/products/:id", async (req, res) => {
  // console.log("idd:",  params.id)

  // const product = await Product.findById(req.params.id);
  const product = await Product.findById(req.params.id).populate("reviews");

  // console.log(product);
  // res.render("products/show", { product, msg: req.flash("success") });
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

  req.flash("success", "Updated Successfully");

  res.redirect(`/products/${req.params.id}`);
});

//delete a particular product
router.delete("/products/:id", async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.redirect("/products");
});

//---------------------------------
//Creating a New comment on a product
router.post("/products/:id/review", async (req, res) => {
  // res.send("you hit the comment route ");
  // console.log(req.body);
  // const product = await Product.findById(req.params.id);
  // const review = new Review(req.body);

  // console.log(review.rating);

  // product.reviews.push(review);

  // await review.save();
  // await product.save();

  //console.log(req.params)

  const product = await Product.findById(req.params.id);

  //console.log(product)
  console.log(req.body);
  const review = new Review(req.body);
  // console.log(review.rating)
  // console.log(review.comment)

  product.reviews.push(review);

  await review.save();
  await product.save();

  // res.send("Go the review");
  res.redirect(`/products/${req.params.id}`);
});

module.exports = router;
