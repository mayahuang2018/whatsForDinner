// // *********************************************************************************
// // html-routes.js - this file offers a set of routes for sending users to the various html pages
// // *********************************************************************************

// // Dependencies
// // =============================================================
// const express = require("express");
// const router = express.Router();
// const passport = require("passport");
// const LocalStrategy = require("passport-local").Strategy;
// const User = require("../models/users");
// // Routes
// // =============================================================

module.exports = (app) => {
  
  app.get("/", (req, res) => {
        console.log(700)
      res.render("index");
  });

  
  // if does not have account send to signup page
    app.get("/signup", (req, res) => {
      if(req.isAuthenticated()) {
        var user = {
          id: req.session.passport.user,
          hasAccount: req.Authenticated()
        }
        res.redirect("index", user);
      } else {
      res.render("signup");
    }
  });  


  //   search and recipepuppy response route
    app.get("/search", (req, res) => {
      if (req.isAuthenticated()) {
        res.render("search");
      } else {
        res.render("index");
      }
    });

  // fav recipes route
    app.get("/results", (req, res) => {
      if (req.isAuthenticated()) {
        res.render("results");
      } else {
        res.render("index");
      }
    });

//   fav recipes route
  app.get("/shoppingList", (req, res) => {
    if (req.isAuthenticated()) {
      res.render("shoppingList");
    } else {
      res.render("index");
    }
  });

 
  // 404 route loads 404.handlebars
  app.get("../404", (req, res) => {
    res.render("404");
  });

}

// //   router.get("/search", isLoggedIn, (req, res) => {
// //     res.render("search")
// //   });

// // function isLoggedIn(req, res, next) {
// //     if (req.isAuthenticated()) return next();
// //     res.redirect("/search")
// // };

//   // 404 route loads 404.handlebars
// //   app.get("../404", (req, res) => {
// //     res.render("404");
// //   });

// //   app.get("../signup", (req, res) => {
// //     res.render("signup");
// //   });

// //   app.get("../index", (req, res) => {
// //     res.render("index");
// //   });

// //   app.get("../search", (req, res) => {
// //     res.render("search");
// //   });
  
// //   app.get("../shoppingList", (req, res) => {
// //     res.render("shoppingList");
// //   });

// 