// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
// var path = require("path");

const isAuthenticated = require("../config/isAuthenticated");


// Routes
// =============================================================
module.exports = function(app) {

  // if does not have account send to signup page
  app.get("/", function(req, res){
    if (!req.User) {
      res.render("/signup");
    }
    res.render("../views/login.handlebars");
  });

  app.get("/signup", function(req, res) {
    res.render("../views/signup.handlebars");
  })

  app.get("/login", function(req, res){
    if (req.User) {
      res.redirect("/index")
    }
    res.render("../views/login.handlebars");
  })

  app.get("/index", isAuthenticated, function(req, res) {
    res.render("../views/index.handlebars")
  })

  // 404 route loads 404.handlebars
  app.get("/404", function(req, res) {
    res.render("../views/404.handlebars");
  });

   // recipies search route
   app.get("/showMatches", function(req, res) {
    res.render("../views/showMatches.handlebars");
  });

   // recipies search route
   app.get("/showShopList", function(req, res) {
    res.render("../views/showShopList.handlebars");
  });

};