const db = require("../models");
// const passport = require("passport");

module.exports = app => {
    // Get all examples
    app.get("/searchresults", (req, res) => {
        if (req.isAuthenticated()) {
            db.apiResults.findAll({})
                .then((dbResults) => {
                    console.log("dbResults", dbResults);

                    const hbsObj = {
                        items: [],
                        id: req.session.passport.user.id,
                        isLoggedIn: req.isAuthenticated()
                    }
                    dbresults.forEach((item) => {
                        hbsObj.items.push(item.dataValues)
                    })
                    res.render("searchresults", hbsObj)
                })         
        } else {
            res.redirect("/");
        }
    }).catch(err => {
    console.log(err, req.query.apiResults)
    });
};

