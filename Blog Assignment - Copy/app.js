const express = require("express");
const app = express();
const seedDB = require("./seed");
const path = require("path");

const mongoose = require("mongoose");
const methodOverride = require("method-override");
const session = require("express-session");
const flash = require("connect-flash");

//connection of mongooose
mongoose
  .connect("mongodb://localhost:27017/blogApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })

  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log("NO Error");
    console.log(err);
  });

const blogRoutes = require("./routes/blog");

// seedDB();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

const sessionConfig = {
  secret: "weneedsomebettersecret",
  resave: false,
  saveUninitialized: true,
};
app.use(session(sessionConfig));
app.use(flash());

app.use((req, res, next) => {
  res.locals.success = req.flash("successfuly updated");
  res.locals.error = req.flash("error");
  next();
});
app.use(blogRoutes);

app.listen("3000", (req, res) => {
  console.log("server is running at port 3000");
});
