// Sets Up Express And Router
var express = require("express");
var router = express.Router();

// Import The Model (burger.js) To Use Its Database Functions
var burger = require("../models/burger.js");

// Create All Our Routes And Set Up Route Logic

// Get Route For All Burgers
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// Get Route For API Info
router.get("/api/burgers", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.json(hbsObject);
  });
});

// Post Route To Add A New Burger
router.post("/api/burgers", function(req, res) {
  burger.insertOne([
    "burger_name"
  ], [
    req.body.burger_name
  ], function(result) {
    // Send Back The ID Of The New Burger
    res.json({ id: result.insertId });
  });
});

// Put Route To Update The Devoured State
router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  // Troubleshooting
  // console.log("condition", condition);

  burger.updateOne({
    devoured: true
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
