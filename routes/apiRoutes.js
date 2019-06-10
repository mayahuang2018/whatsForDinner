/* eslint-disable linebreak-style */
var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/favoriterecipes", function(req, res) {
    db.Dinner.findAll({}).then(function(dbDinner) {
      res.json(dbDinner);
    });
  });

  // shop-list
  app.get("/api/shoplist", function(req, res) {
    db.Dinner.create(req.body).then(function(dbDinner) {
      res.json(dbDinner);
    });
  });

//   // Delete an example by id
//   app.delete("/api/examples/:id", function(req, res) {
//     db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
//       res.json(dbExample);
//     });
//   });
};
