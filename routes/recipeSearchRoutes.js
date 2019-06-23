const db = require("../models");
// const passport = require("passport");

module.exports = app => {
    // Get all examples
    app.get("/api/apiResults", (req, res) => {
        if (req.isAuthenticated()) {
            db.apiResults.findAll({})
                .then((dbResults) => {
                    res.json(dbResults);  
                }) 
        } else {
            res.redirect("/search");
        } 
    }).catch(err => {
    console.log(err)
    }); 
};


