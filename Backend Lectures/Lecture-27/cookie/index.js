const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

app.use(cookieParser());

app.get("/greet", (req, res) => {
  // to show the cookie we used parser
  console.log(req.cookies);
  const { name = "Anonymous" } = req.cookies;
  res.send(`Hey there${name}`);
});

app.get("/setname", (req, res) => {
  res.cookie("name", "Kritika");
  res.cookie("mode", "dark");
  res.send("sent cookie successfully");
});

app.listen("3000", () => {
  console.log("server is running at port 3000");
});
