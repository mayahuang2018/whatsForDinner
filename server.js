/* eslint-disable linebreak-style */
require("dotenv").config();
const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const passport = require("passport");
const session = require("express-session");
// const flash = require("connect-flash");
const bc = require("bcryptjs");
const PORT = process.env.PORT || 3506;
const path = require("path");
const db = require("./models");



// Middleware
app.use(express.urlencoded({
  extended: false
}));
app.use(express.json());
app.use(express.static("public"));

// passport
require("./config/passport.js")(passport);

app.use(
  session({ secret: "blahblahblah", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());
// app.use(flash);
// app.use(bc());


// Routes
require("./routes/htmlRoutes")(app);
require("./routes/passportRoutes")(app, passport);


const viewsPath = path.join(__dirname, 'views');
const layoutsPath = path.join(viewsPath, 'layouts');
const partialsPath = path.join(viewsPath, 'partials');
app.set('views', viewsPath);

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main",
    layoutsDir: layoutsPath,
    partialsDir: partialsPath,
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
