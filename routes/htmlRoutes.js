// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("*", function(req, res) {
    res.render(path.join(__dirname, "../views/index.handlebars"));
  });

  // 404 route loads 404.handlebars
  app.get("/404", function(req, res) {
    res.render(path.join(__dirname, "../views/404.handlebars"));
  });

  // login route
  app.get("/login", function(req, res) {
    res.render(path.join(__dirname, "../views/login.handlebars"));
  });

  // recipies search route
  app.get("/search", function(req, res) {
    res.render(path.join(__dirname, "../views/search.handlebars"));
  });

   // recipies search route
   app.get("/showMatches", function(req, res) {
    res.render(path.join(__dirname, "../views/showMatches.handlebars"));
  });

   // recipies search route
   app.get("/showShopList", function(req, res) {
    res.render(path.join(__dirname, "../views/showShopList.handlebars"));
  });

};