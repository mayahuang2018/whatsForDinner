const db = require("../models");

const passport = require("../config/passport");

module.exports = function (app) {
    app.get("/logout", function (req, res) {
        req.logout();
        res.redirect("/");
    });
}