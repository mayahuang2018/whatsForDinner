const db = require("../models");

module.exports = function(app) {
// Get all examples
app.get("/api/apiResults", function (req, res) {
    db.apiResults.findAll({}).then(function (dbDinner) {
        res.json(dbDinner);
    });
});

app.post("/api/apiResults", function(req, res))

// shop-list
app.get("/api/shoplist", function (req, res) {
    db.Dinner.create(req.body).then(function (dbDinner) {
        res.json(dbDinner);
    });
});
};

//   // Delete an example by id
//   app.delete("/api/examples/:id", function(req, res) {
//     db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
//       res.json(dbExample);
//     });
//   });