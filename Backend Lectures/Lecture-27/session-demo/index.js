const express = require("express");
const app = express();
const session = require("express-session");

app.use(
  session({
    secret: "thisnisnotagoodsecret",
    resave: false,
    saveUninitialized: true,
  })
);

app.get("/viewcount", (req, res) => {
  if (req.session.pagecount) {
    req.session.pagecount += 1;
  } else {
    req.session.pagecount = 1;
  }
  res.send(`You viewed this page ${req.session.pagecount} time`);
});

app.get("/register", (req, res) => {
  const { username } = req.query;
  req.session.username = username;
  // res.send("Registered successfully");
  res.redirect("/greet");
});

app.get("/", (req, res) => {
  res.send("IT worked");
});

app.get("/greet", (req, res) => {
  // res.send("Hello there");
  const { username = "Anonymous" } = req.session;
  res.send(`hello from ${username}`);
});

app.listen("3000", () => {
  console.log("server is running");
});
