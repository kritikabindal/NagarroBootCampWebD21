const express = require("express");
const passport = require("passport");
const router = express.Router();
const User = require("../models/user");

// router.get("/fakeUser", async (req, res) => {
//   try {
//     const user = new User({
//       email: "kritikabindal30@gmail.com",

//       username: "kriitika",
//     });

//     const newUser = await User.register(user, "kritiika30@");

//     res.send(newUser);
//     console.log(newUser);
//   } catch (e) {
//     console.log("shabhash", e);
//   }
// });
//==============
//Get the signup form
router.get("/register", async (req, res) => {
  res.render("auth/signup");
});

//=============
router.post("/register", async (req, res) => {
  try {
    const user = new User({
      username: req.body.username,
      email: req.body.email,
    });
    const newUser = await User.register(user, req.body.password);
    req.flash("success", "Registered Successfully");
    res.redirect("/products");
  } catch (e) {
    req.flash("error", e.message);

    res.redirect("/register");
  }
});

//====================
//get the login form
router.get("/login", async (req, res) => {
  res.render("auth/login");
});

//====================
router.post(
  "/login",
  passport.authenticate("local", {
    // successRedirect: "/products",
    failureRedirect: "/login",
    failureFlash: true,
  }),
  (req, res) => {
    req.flash("success", `welcome back${req.user.username}`);
    // console.log(req.user);
    res.redirect("/products");
  }
);
//=======
router.get("/logout", (req, res) => {
  req.logout();
  req.flash("success", "logged out successfully");
  res.redirect("/login");
});
module.exports = router;
