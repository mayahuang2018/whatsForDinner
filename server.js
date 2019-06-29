/* eslint-disable linebreak-style */
require("dotenv").config();
const express = require("express");
const app = express();

const exphbs = require("express-handlebars");
const helpers = require("handlebars-helpers");


const passport = require("passport");
const session = require("express-session");
// const flash = require("connect-flash");
const bc = require("bcryptjs");
const PORT = process.env.PORT || 3874;
const path = require("path");
const db = require("./models");

console.log("100");

// Middleware
app.use(express.urlencoded({
  extended: false
}));
app.use(express.json());
app.use(express.static("public"));
console.log("200");

passport
require("./config/passport.js")(passport);

app.use(
  session({ secret: "blahblahblah", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());
console.log("300");
 
// Routes
require("./routes/resultsRoutes")(app);
require("./routes/favRecipeRoutes")(app);
require("./routes/shoppingListRoutes");
require("./routes/htmlRoutes")(app, passport);
require("./routes/passportRoutes")(app, passport);
console.log("350");


const viewsPath = path.join(__dirname, 'views');
const layoutsPath = path.join(viewsPath, 'layouts');
const partialsPath = path.join(viewsPath, 'partials');
app.set('views', viewsPath);
app.set('partials', partialsPath);

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
console.log("400");

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
  console.log("410");
  app.listen(PORT, function () {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
console.log("500");

module.exports = app;
