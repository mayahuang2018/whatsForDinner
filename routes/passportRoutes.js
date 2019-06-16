module.exports = (app, passport) => {

    // displays login page
    app.get("/index", (req, res) => {
        res.render("index");
    });

    // displays signup page
    app.get("/signup", (req, res) => {
        res.render("signup")
    });

    // displays search page
    app.get("/search", (req, res) => {
        res.render("search")
    });

    // sends through local strategy for signup, and if success to search
    app.post("/signup",
        passport.authenticate("local-signup", {
            successRedirect: "/search",
            failureRedirect: "/signup"
            // failureFlash: true
        }),
    );
    console.log("signedup")

    // sends through local strategy for login, and if success to search
        app.post("/index",
            passport.authenticate("local-login", {
                successRedirect: "/search",
                failureRedirect: "/index"
                // failureFlash: true
            })
        );
        console.log("logged in")

    // app.get("/search", isLoggedIn, (req, res) => {
    //     res.render("search")
    // });

    // app.post("/index",
    //     passport.authenticate("local-login", (err) => {
    //         if (err) {
    //             res.redirect("/login");
    //             console.log(err)
    //         } else {
    //             res.redirect("/search")
    //         }
    //     }
    //  )
    // );
    // console.log("logged in")

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

};