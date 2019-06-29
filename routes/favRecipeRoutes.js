const db = require("../models");

module.exports = app => {

    // app.get("/api/users", (req, res) => {
    //     db.users.findAll({
    //         include: [{
    //             model: db.results,    
    //         }]
    //     }).then(users => {
    //         const resObj = users.map(user => {
    //             return Object.assign(
    //                 {},
    //                 {
    //                     user_id: user.user_id,
    //                     username: username,
    //                     results: user.results.map(results => {
    //                         return Object.assign(
    //                             {},
    //                             {
    //                                 results_id: results.id,
    //                                 user_id: results.user_id,
    //                                 title: dbResults,
    //                                 ingredients: dbResults
    //                             } 
    //                         )
    //                     })
    //                 }
    //             )
    //         });
    //         res.json(resObj);
    //     });
    // })

    // Get all examples
    app.get("/api/results", (req, res) => {  
            db.user.findOne(
                {
                where: {
                   id: req.session.passport.user.id
                }
            }).then(() => {
                db.results.findAll({
                    include: [db.user],
                    where: {
                        user_id: req.session.passport.user.id 
                    }
                }).then(() => {
                    hbsObj = {
                        "title": db.results.title,
                        "ingredients": db.results.ingredients
                    }
                }).then(() => {
                    res.render("favRecipes", {
                        hbsObj
                    });
                });
                res.json(hbsObj)
            });
        });            
       

    // app.get("/api/results/:userID", (req, res) => {
    //     db.users.findOne({
    //         where: {
    //             id: req.session.passport.userID
    //         }
    //     }).then(dbusers => {
    //         db.results.findAll({
    //             include: [db.users],
    //             where: {
    //                 userId: req.params.id
    //             }
    //         }).then(dbresults => {
    //             res.render("favRecipes", {
    //                 title: dbresults,
    //                 ingredients: dbresults
    //             });
    //         });
    //     });
    // });

    app.post("/api/results", (req, res) => {
        console.log("post results");

        const resultsObj = {
            title: req.body.title,
            ingredients: req.body.ingredients,
            user_id: req.session.passport.user.id
        };
        console.log(resultsObj);
        db.results.create(resultsObj).then(dbresults => {
            res.json(dbresults);
            console.log("created");
        })
    }); 

    console.log("favRecipeRoutes available");
// });

};
