const db = require("../models");

module.exports = function (app) {
    // Get all examples
    app.get("/api/shoppingLists", function (req, res) {
        db.shoppingLists.findAll({}).then(function (dbDinner) {
            res.json(dbDinner);
        });
    });

    app.get("/api/shoppingLists", function (req, res) {
        db.shoppingLists.findOne({
            where: {
                id: req.params
            }
        }).then(function (dbshoppingLists) {
            res.json(dbAuthor);
        });
    })

    app.post("/api/shoppingLists", function (req, res) {
        console.log("post shopping list");
        const shoppingListObj = {
            title: req.body.title,
            ingredients: req.body.ingredients,
            // userID: req.session.passport.user
        };
        console.log(shoppingListObj);
        db.shoppingLists.create(shoppingListObj).then(function (dbshoppingLists) {
            res.json(dbshoppingLists);
            console.log("created");
        })
    });

    app.delete("/api/shoppingLists/:id", function (req, res) {
        db.shoppingLists.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbshoppingLists) {
            res.json(dbshoppingLists);
        })
    });

    console.log("shoppingListRoutes available");
}