// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");


// Routes
// =============================================================
module.exports = function(app) {

  // if does not have account send to signup page
  app.get("/", function(req,res){
    if(req.isAuthenticated()){
        var user = {
            id: req.session.passport.user,
            isloggedin: req.isAuthenticated()
        }
        res.render("index", user);
    }
    else{
        res.render("login");
    }
    
})

  app.get("/signup", (req, res) => {
    res.render("../views/signup.handlebars");
  })

  app.get("/login", (req, res) => {
    if (req.User) {
      res.redirect("/index")
    }
    res.render("../views/login.handlebars");
  })


  // 404 route loads 404.handlebars
  app.get("/404", (req, res) => {
    res.render("../views/404.handlebars");
  });

   // recipies search route
   app.get("/showMatches", (req, res) => {
    res.render("../views/showMatches.handlebars");
  });

   // recipies search route
   app.get("/showShopList", (req, res) => {
    res.render("../views/showShopList.handlebars");
  });

};