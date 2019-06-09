var passport = require("passport-local");

// Create a new user - username and password
app.post("/api/login", passport.authenticate('local', {
    successRedirect: '/', 
    failureRedirect: '/login',
    failureFlash: true
  }));