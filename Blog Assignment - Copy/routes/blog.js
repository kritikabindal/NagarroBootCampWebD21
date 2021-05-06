const express = require("express");
const router = express.Router();
const Blog = require("../models/blog");
const Review = require("../models/review");

//===============
//display all the  blogs
router.get("/blogs", async (req, res) => {
  try {
    // res.send("page created");
    const blogs = await Blog.find({});
    res.render("blogs/index", { blogs });
  } catch (e) {
    console.log("Something went wrong");
    req.flash("error", "cannot find product");
    res.render("error");
  }
});

//=====================
//get the form  for new blog
router.get("/blogs/new", (req, res) => {
  res.render("blogs/new");
});

//==================
//create the new blog
router.post("/blogs", async (req, res) => {
  try {
    await Blog.create(req.body.blog);
    req.flash("success", "Product Created Successfully");

    res.redirect("/blogs");
  } catch (e) {
    console.log(e.message);
    req.flash("error", "cannot create product");
    res.render("error");
  }
});

//===============
//show particular blog
router.get("/blogs/:id", async (req, res) => {
  const blog = await Blog.findById(req.params.id).populate("reviews");
  res.render("blogs/show", { blog });
});

//=====================
//get the edit form
router.get("/blogs/:id/edit", async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  res.render("blogs/edit", { blog });
});

//============================
//update the particular blog
router.patch("/blogs/:id", async (req, res) => {
  try {
    await Blog.findByIdAndUpdate(req.params.id, req.body.blog);
    req.flash("success", "Updated Successfully");
    res.redirect(`/blogs/${req.params.id}`);
  } catch (e) {
    console.log(e);
  }
});

//============================
//delete the particular blog
router.delete("/blogs/:id", async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.redirect("/blogs");
  } catch (e) {
    console.log(e);
  }
});

//=====================================

//Creating a New comment on a Blog
router.post("/blogs/:id/review", async (req, res) => {
  // res.send("you hit the comment route ");
  // console.log(req.body);
  const product = await Blog.findById(req.params.id);
  const review = new Review(req.body);

  // console.log(review);

  blog.reviews.push(review);

  await review.save();
  await product.save();

  // res.send("Go the review");
  res.redirect(`/blogs/${req.params.id}`);
});

module.exports = router;
