/* eslint-disable linebreak-style */
require("dotenv").config();
const express = require("express");
const exphbs = require("express-handlebars");
const passport = require("passport");
const session = require("express-session");
const bc = require("bcryptjs");
// const env = require("dotenv").load();
var db = require("./models");
var app = express();
var PORT = process.env.PORT || 6258;


// Routes
require("./routes/htmlRoutes")(app);

require("./config/passport.js")(passport, db.user);


// Middleware
app.use(express.urlencoded({
  extended: false
}));
app.use(express.json());
app.use(express.static("public"));


// passport
app.use(
  session({ secret: "asdfaoinadfj40987", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());




// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");



var syncOptions = {
  force: false
};

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function () {
  app.listen(PORT, function () {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;