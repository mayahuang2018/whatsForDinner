module.exports = (app, passport) => {

    // sends through local strategy for signup, and if success to search
    app.post("/signup",
        passport.authenticate("local-signup", {
            successRedirect: "/login",
            failureRedirect: "/signup"
            // failureFlash: true
        }),
    );
       // sends through local strategy for login, and if success to search
        app.post("/index",
            passport.authenticate("local-login", {
                successRedirect: "/search",
                failureRedirect: "/index"
                // failureFlash: true
            })
        );
    
    app.get("/search", isLoggedIn, (req, res) => {
        res.render("search")
    });

    app.get("/logout", (req, res) => {
        req.session.destroy(err => {
            res.redirect("/index")
        });
    });

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }
        res.redirect("/search")
    }

    console.log("passportRoutes available");

};

// I would add the failure flash on here to give alerts if signup for failure are not correct for whatever reason