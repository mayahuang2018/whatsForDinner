// // *********************************************************************************
// // html-routes.js - this file offers a set of routes for sending users to the various html pages
// // *********************************************************************************

// // Dependencies
// // =============================================================
// // var path = require("path");
// // var passport = require("passport");
// // var LocalStrategy = require("passport-local");
// // const express = require("express");
// // const router = express.Router();

// // Routes
// // =============================================================
// module.exports = app => {

//   app.get("/index", (req, res) => {
//     if (req.isAuthenticated()) {
//       var user = {
//         id: req.session.passport.user,
//         isLoggedIn: req.Authenticated()
//       }
//       res.render("search", user)
//     } else {
//       res.render("index");
//     }
//   });

  
//   // if does not have account send to signup page
//     app.get("/signup", (req, res) => {
//       if(req.isAuthenticated()) {
//         var user = {
//           id: req.session.passport.user,
//           hasAccount: req.Authenticated()
//         }
//         res.redirect("index", user);
//       } else {
//       res.render("signup");
//     }
//   });  


//   //   search and recipepuppy response route
//     app.get("/search", (req, res) => {
//       if (req.isAuthenticated()) {
//         res.render("search");
//       } else {
//         res.render("index");
//       }
//     });

//   // fav recipes route
//     app.get("/results", (req, res) => {
//       if (req.isAuthenticated()) {
//         res.render("results");
//       } else {
//         res.render("index");
//       }
//     });

//   // fav recipes route
//   app.get("/shoppingList", (req, res) => {
//     if (req.isAuthenticated()) {
//       res.render("shoppingList");
//     } else {
//       res.render("index");
//     }
//   });

 
//   // 404 route loads 404.handlebars
//   app.get("../404", (req, res) => {
//     res.render("/404.handlebars");
//   });

//   app.get("/search", isLoggedIn, (req, res) => {
//     res.render("search")
//   });

// function isLoggedIn(req, res, next) {
//     if (req.isAuthenticated()) return next();
//     res.redirect("")
// }

// // function hasAccount(req, res, next) {
// //     if (req.isAuthenticated()) return next();
// //     res.redirect("")
// // }


// };