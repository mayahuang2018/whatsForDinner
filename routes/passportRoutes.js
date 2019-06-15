const passport = require("passport");

module.exports = (app, passport) => {
    

    app.get("*", (req, res) => {
        res.render("index");
    });

    app.get("/signup", (req, res) => {
        res.render("signup");
    });

    app.post("/signup",
        passport.authenticate("local-signup", {
            successRedirect: "/login",
            failureRedirect: "/signup",
            // failureFlash: true
        })
    );

    // app.get("/logout", (res, res) => {
    //     req.session.destroy(err => {
    //         res.redirect("/")
    //     });
    // });

    app.post(
        "/login",
        passport.authenticate("local-login", {
            successRedirect: "/index",
            failureRedirect: "/login",
            // failureFlash: true
        })
    );

    app.get("/index", isLoggedIn, (req, res) => {
        res.render("index")
    });

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated()) return next();
        res.redirect("/index")
    }

};