// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
require("path");
require("passport");
require("passport-local");

// Routes
// =============================================================
module.exports = app => {

  // if does not have account send to signup page
  app.get("/", (req, res) => {
    if (req.isAuthenticated()) {
      const user = {
        id: req.session.passport.user,
        isloggedin: req.isAuthenticated()
      };
      res.render("/index", user);
    } else {
      res.render("login");
    }
  });

  // recipies results route
  app.get("/results", (req, res) => {
    if (req.isAuthenticated()) {
      const user = {
        id: req.session.passport.user,
        isloggedin: req.isAuthenticated()
      };
      res.render("../views/layouts/results.handlebars", user);
    } else {
      res.render("login");
    }
  });


  // recipies results route
  app.get("/search", (req, res) => {
    if (req.isAuthenticated()) {
      const user = {
        id: req.session.passport.user,
        isloggedin: req.isAuthenticated()
      };
      res.render("../views/search.handlebars", user);
    } else {
      res.render("login");
    }
  });


// recipies results route
app.get("/results", (req, res) => {
  if (req.isAuthenticated()) {
    const user = {
      id: req.session.passport.user,
      isloggedin: req.isAuthenticated()
    };
    res.render("../views/layouts/results.handlebars", user);
  } else {
    res.render("login");
  }
});

// recipies add your own route
app.get("/add", (req, res) => {
  if (req.isAuthenticated()) {
    const user = {
      id: req.session.passport.user,
      isloggedin: req.isAuthenticated()
    };
    res.render("../views/layouts/add.handlebars", user);
  } else {
    res.render("login");
  }
});

  app.get("/signup", (req, res) => {
    res.render("../views/signup.handlebars");
  })

  app.get("/login", (req, res) => {
    if (req.isAuthenticated()) {
      const user = {
        id: req.session.passport.user,
        isloggedin: req.isAuthenticated()
      };
      res.render("../views/index.handlebars", user);
    } else {
      res.render("login");
    }
  });


  // 404 route loads 404.handlebars
  app.get("../404", (req, res) => {
    res.render("../views/404.handlebars");
  });


};