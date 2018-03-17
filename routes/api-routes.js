// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET Route For Getting All Of The Burgers
  app.get("/api/burgers", function(req, res) {
    // Find All Posts; Return Them To The User With res.json
    db.Burger.findAll({}).then(function(dbPost){
      res.json(dbPost);
    });
  });

  // POST Route For Adding A New Burger
  app.post("/api/burgers", function(req, res) {
    console.log(req.body)
    // Creates A Post Using req.body; Returns The Result Using res.json
    db.Burger.create({
      burger_name: req.body.burger_name,
    }).then(function(dbPost){
      res.json(dbPost);
    }).catch(function(err){
      res.json(err)
    });
  });

  // PUT Route For Updating Burger Devoured Status
  app.put("/api/burgers/:id", function(req, res) {
    
    // Updates Post Using Values In req.body, Where The id Is Equal To req.params.id; Returns Result To The User Using res.json
    db.Burger.update({
      devoured: req.body.devoured
    },{
      where: {
        id: req.params.id
      }
    }).then(function(dbPost){
      res.json(dbPost);
    }).catch(function(err){
      res.json(err)
    })
  });
};
