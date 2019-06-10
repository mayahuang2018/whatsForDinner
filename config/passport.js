const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const db = require("../models");

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  },
  function (username, password, done) {
    User.findOne({
      email: email
    }, function (err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, {
          message: "Incorrect username."
        });
      }
      if (!user.validPassword(password)) {
        return done(null, false, {
          message: "Incorrect password."
        });
      }
      return done(null, user);
    })
  }
));

passport.serializeUser(function(user, cb) {
    cb(null, obj);
});

passport.deserializeUser(function(obj, cb){
    cd(null, obj);
});

module.exports = passport;