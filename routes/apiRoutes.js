/* eslint-disable linebreak-style */
const db = require("../models");

const passport = require("../config/passport");

module.exports = function(app) {
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    res.json("/Users");
  });

  app.post("/api/signup", function(req, res) {
    console.log(req.body);
    db.User.create({
      email: req.body.email,
      password: req.body.password
    }).then(function() {
      res.redirect(307, "/api/login");
    }).catch(function(err) {
      console.log(err);
      res.json(err);
    });
  });

  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      res.json({});
    }
    else {
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

  // Get all examples
  app.get("/api/favoriterecipes", function(req, res) {
    db.Dinner.findAll({}).then(function(dbDinner) {
      res.json(dbDinner);
    });
  });

  // shop-list
  app.get("/api/shoplist", function(req, res) {
    db.Dinner.create(req.body).then(function(dbDinner) {
      res.json(dbDinner);
    });
  });

//   // Delete an example by id
//   app.delete("/api/examples/:id", function(req, res) {
//     db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
//       res.json(dbExample);
//     });
//   });
};
