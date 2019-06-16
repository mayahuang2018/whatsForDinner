const db = require("../models");
const passport = require("passport");

module.exports = (app) => {

    app.post("/signup",
        passport.authenticate("local-signup", {
            successRedirect: "index",
            failureRedirect: "signup",
            // failureFlash: true
        })
    );

    // app.get("/logout", (res, res) => {
    //     req.session.destroy(err => {
    //         res.redirect("/")
    //     });
    // });

    app.post(
        "/index",
        passport.authenticate("local-login", {
            successRedirect: "search",
            failureRedirect: "index",
            // failureFlash: true
        })
    );

};