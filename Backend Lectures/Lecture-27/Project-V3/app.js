const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
// const seedDB = require("./seed");
const methodOverride = require("method-override");
const session = require("express-session");
const flash = require("connect-flash");

// const Product = require("./models/product");

//Routes
const productRoutes = require("./routes/product");

mongoose
  .connect("mongodb://localhost:27017/showApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })

  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log("OH NO Error");
    console.log(err);
  });

// seedDB();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

//middle ware to config static files
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// app.get('/',(req,res)=>
// {
//     res.send("Landing page");
// }

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
app.use(productRoutes);

app.listen(8001, () => {
  console.log("server started at port 8001");
});
