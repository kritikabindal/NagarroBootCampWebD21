const mongoose = require("mongoose");
const Review = require("./review");

const blogSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  img: {
    type: String,
  },
  desc: {
    type: String,
  },
  location: {
    type: String,
  },
  highlights: {
    type: String,
  },
  cost: {
    type: String,
  },
  time: {
    type: String,
  },
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
