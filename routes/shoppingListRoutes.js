const db = require("../models");

module.exports = function(app) {
// Get all examples
app.get("/api/apiShoppingList", function (req, res) {
    var query = {};
    if (req.query._id) {
        query.ashoppingList = req.query.shoppingList_id;
    }
    db.shoppingList.findAll({
        where: query
    }).then(function (dbDinner) {
        res.json(dbDinner);
    });
});


app.post("/api/shoppingList", function(req, res) {
    db.shoppingList.create(req.body).then(function(dbshoppingList) {
        res.json(dbshoppingList);
    })
});

app.delete("/api/shoppingList/:id", function(req, res) {
    db.shoppingList.destroy({
        where: {
            id: req.params.id
        }
    }).then(function(dbshoppingList) {
        res.json(dbshoppingList);
    })
})
}
