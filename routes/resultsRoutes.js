const db = require("../models");
const express = require("express");
const router = express.Router();


    // Get all examples
    router.get("/api/results", (req, res) => {
        if (req.isAuthenticated()) {
            db.results.findAll({
                where: {
                   userID: req.session.passport.user
                }
            })
                .then(dbresults => {
                    res.json(dbresults);  
                });
        } else {
            res.redirect("/search");
        } 
    });
    
    

    router.get("/api/results/:userID", (req, res) => {
        db.users.findOne({
            where: {
                id: req.session.passport.userID
            }
        }).then(dbusers => {
            db.results.findAll({
                include: [db.users],
                where: {
                    userId: req.params.id
                }
            }).then(dbresults => {
                res.render("favRecipes.handlebars", {
                    title: dbresults,
                    ingredients: dbresults
                });
            });
        });
    });

    // router.post("/api/results", (req, res) => {
    //     console.log("post results");

    //     const resultsObj = {
    //         title: req.body.title,
    //         ingredients: req.body.ingredients,
    //         userID: req.session.passport.user.id
    //     };
    //     console.log(resultsObj);
    //     db.results.create(resultsObj).then(dbresults => {
    //         res.json(dbresults);
    //         console.log("created");
    //     })
    // }); 

console.log("recipeSearchRoutes available");

module.exports = router;