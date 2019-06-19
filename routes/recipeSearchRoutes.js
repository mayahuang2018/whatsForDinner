const db = require("../models");
// const passport = require("passport");

module.exports = app => {
    // Get all examples
    app.get("/search", (req, res) => {
        if (req.isAuthenticated()) {
            db.apiResponses.findAll({})
                .then((dbapiResponse) => {
                    console.log("dbapiResponse", dbapiResponses);

                    const hbsObj = {
                        items: [],
                        id: req.session.passport.user,
                        isLoggedIn: req.isAuthenticated()
                    }
                    dbapiResponse.forEach((item) => {
                        hbsObj.items.push(item.dataValues)
                    })
                    res.render("search", hbsObj)
                })         
        } else {
            res.redirect("/");
        }
    }).catch(err => {
    console.log(err, req.query.apiResponse)
    });

}

// we were going towards the ability to search the saved recipies. we did not get to this part.
