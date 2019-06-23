const db = require("../models");

module.exports = (app) => {
    // Get all examples

    app.get("/api/favs", (req, res) => {
        db.favs.findOne({
            where: {
                id: req.params
            }
        }).then(dbfavs => {
            res.json(dbfavs);
        });
    })

    app.post("/api/favs", (req, res) => {
        console.log("post favs");

        const favsObj = {
            title: req.body.title,
            ingredients: req.body.ingredients,
            link: req.body.link,
            userID: req.session.passport.user
        };
        console.log(favsObj);
        db.favs.create(favObj).then(function (dbfavs) {
            res.json(dbfavs);
            console.log("created");
        })
    });

    app.delete("/api/favs/:id", function (req, res) {
        db.favs.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbfavs) {
            res.json(dbfavs);
        })
    });

    console.log("favRoutes available");
}