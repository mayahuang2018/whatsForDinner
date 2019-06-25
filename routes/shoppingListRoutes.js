const db = require("../models");
const express = require("express");
const router = express.Router();


    // Get all examples
    // app.get("/api/shoppingLists", (req, res) => {
    //     db.shoppingLists.findAll({}).then(dbshoppingLists => {
    //         res.json(dbshoppingLists);
    //     });
    // });

    // app.get("/api/shoppingLists", (req, res) => {
    //     db.shoppingLists.findOne({
    //         where: {
    //             id: req.params
    //         }
    //     }).then(dbshoppingLists => {
    //         res.json(dbshoppingLists);
    //     });
    // })

    // app.post("/api/shoppingLists", (req, res) => {
    //     console.log("post shopping list");

    //     const shoppingListObj = {
    //         title: req.body.title,
    //         ingredients: req.body.ingredients,
    //         userID: req.session.passport.user
    //     };
    //     console.log(shoppingListObj);
    //     db.shoppingLists.create(shoppingListObj).then(function (dbshoppingLists) {
    //         res.json(dbshoppingLists);
    //         console.log("created");
    //     })
    // });

    // app.delete("/api/shoppingLists/:id", function (req, res) {
    //     db.shoppingLists.destroy({
    //         where: {
    //             id: req.params.id
    //         }
    //     }).then(function (dbshoppingLists) {
    //         res.json(dbshoppingLists);
    //     })
    // });

    console.log("shoppingListRoutes available");

    module.exports = router