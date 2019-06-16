module.exports = (router, passport) => {

    // displays login page
    router.get("/index", (req, res) => {
        res.render("index");
    });

    // displays signup page
    router.get("/signup", (req, res) => {
        res.render("signup")
    });

    // displays login page
    router.get("/search", (req, res) => {
        res.render("search")
    });

    // sends through local strategy for signup, and if success to search
    router.post("/signup",
        passport.authenticate("local-signup", {
            successRedirect: "/search",
            failureRedirect: "/signup"
            // failureFlash: true
        })
    );

    // sends through local strategy for login
        router.post("/index",
            passport.authenticate("local-login", {
                successRedirect: "/search",
                failureRedirect: "/index"
                // failureFlash: true
            })
        );
        console.log("logged in")

    // router.get("/search", isLoggedIn, (req, res) => {
    //     res.render("search")
    // });

    // router.post("/index",
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

    router.get("/search", isLoggedIn, (req, res) => {
        res.render("search")
    });

    router.get("/logout", (req, res) => {
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