
const db = require("../models");

const passport = require("../config/passport");

module.exports = function(app) {

  app.post("/api/signup", function(req, res) {
    console.log(req.body);
    User.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    }).then(function() {
      res.redirect(307, "/api/login");
    }).catch(function(err) {
      console.log(err);
      res.json(err);
    });
  });
};
