const db = require("../models");

module.exports = function(app) {
// Get all examples
app.get("/api/apiResults", function (req, res) {
    var query = {};
    if (req.query.apiResults_id) {
        query.apiResults = req.query.apiResults_id;
    }
    db.apiResults.findAll({
        where: query
    }).then(function (dbDinner) {
        res.json(dbDinner);
    });
});


app.post("/api/apiResponse", function(req, res) {
    db.apiResults.create(req.body).then(function(dbapiRecipies) {
        res.json(dbapiRecipes);
    })
});

app.delete("/api/apiResponse/:id", function(req, res) {
    db.apiResponse.destroy({
        where: {
            id: req.params.id
        }
    }).then(function(dbapiResponse) {
        res.json(dbapiResponse);
    })
})

