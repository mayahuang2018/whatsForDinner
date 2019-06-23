const db = require("../models");
// const passport = require("passport");

module.exports = app => {
    // Get all examples
    app.get("/api/results", (req, res) => {
        if (req.isAuthenticated()) {
            db.results.findAll({})
                .then((dbResults) => {
                    res.json(dbResults);  
                }) 
        } else {
            res.redirect("/search");
        } 
    }); 

    app.post("/api/results", (req, res) => {
        console.log("post results");

        const resultsObj = {
            title: req.body.title,
            ingredients: req.body.ingredients,
            userID: req.session.passport.user.id
        };
        console.log(resultsObj);
        db.results.create(resultsObj).then(function (dbresults) {
            res.json(dbresults);
            console.log("created");
        })
    }); 

console.log("recipeSearchRoutes available");
};


