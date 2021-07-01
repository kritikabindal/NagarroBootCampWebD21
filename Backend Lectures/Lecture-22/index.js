const express = require("express");
const app = express();
const { v4: uuid } = require("uuid");
const methodOverride = require("method-override");
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.json());

app.set("view engine", "ejs");

let blogs = [
  {
    id: uuid(),
    Title: "Javascript",
    Image:
      "https://images.unsplash.com/photo-1472437774355-71ab6752b434?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8amF2YXNjcmlwdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    Author: "ABC",
    Description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  },
  {
    id: uuid(),
    Title: "Node JS",
    Image:
      "https://images.unsplash.com/photo-1606166325683-e6deb697d301?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG5vZGUlMjBqc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    Author: "DEF",
    Description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  },
  {
    id: uuid(),
    Title: "React",
    Image:
      "https://images.unsplash.com/photo-1618477388954-7852f32655ec?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fHJlYWN0JTIwanN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    Author: "GHI",
    Description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  },
];
//to list all  the blogs
app.get("/blogs", (req, res) => {
  // res.send ("this is working")
  res.render("blogs/index", { blogs });
});

//getting a blog for adding  new blog 
app.get("/blogs/new", (req, res) => {
  res.render("blogs/new");
});

//creates a new blog
app.post("/blogs", (req, res) => {
  const { Title, Description, Image, Author } = req.body;
  const blogs = blogs.push({ Title, Description, Image, Author, id: uuid() });
  console.log(blogs);
  res.redirect("/blogs");
});

//show Particular blog
app.get("/blogs/:id", (req, res) => {
  const { id } = req.params;
  const foundblog = blogs.find((b) => b.id === id);
  // console.log(foundcomment);
  res.render("blogs/show", { blog: foundblog });
  // res.send(foundblog);
});

//editing the blog
app.get("/blogs/:id/edit", (req, res) => {
  const { id } = req.params;
  const foundblog = blogs.find((b) => b.id === id);

  res.render("blogs/edit", { blog: foundblog });
});

app.patch("/blogs/:id", (req, res) => {
  const { id } = req.params;
  const foundBlog = blogs.find((b) => b.id === id);
  const updatedBody = req.body.Description;
  const updatedtitle = req.body.Title;
  const updatedAuthor = req.body.Author;
  foundBlog.Description = updatedBody;
  foundBlog.Title = updatedtitle;
  foundBlog.Author = updatedAuthor;
  console.log(foundBlog);
  res.redirect("/blogs");
});

app.delete("/blogs/:id", (req, res) => {
  const { id } = req.params;

  const tempArray = blogs.filter((b) => b.id !== id);

  blogs = tempArray;

  res.redirect("/blogs");
});

app.listen("3000", () => {
  console.log("Server is running at Port 3000");
});
