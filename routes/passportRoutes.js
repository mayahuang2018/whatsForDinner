const express = require("express");
const passport = require("passport");

module.exports = (app, passport) => {
    
    app.post("/users", 
    passport.authenticate("local-signup", {
        successRedirect: "/login",
        failureRedirect: "/login",
        // failureFlash: true
    })
);
    
    app.get("/", (req, res) => {
        res.render("index");
    });

    app.get("/signup", (req, res) => {
        res.render("signup");
    });

    

    app.get("/index", isLoggedIn, (req, res) => {
        res.render("index")
    });

    // app.get("/logout", (res, res) => {
    //     req.session.destroy(err => {
    //         res.redirect("/")
    //     });
    // });

    app.post(
        "/login",
        passport.authenticate("local-signin", {
            successRedirect: "/index",
            failureRedirect: "/login",
            // failureFlash: true
        })
    );

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated()) return next();
        res.redirect("/login")
    }

};