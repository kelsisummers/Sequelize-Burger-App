// Import Fhe ORM To Create Functions That Will Interact With The Database
var orm = require("../config/orm.js");
// Troubleshooting
// console.log("ORM: This is loaded.")

var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  // The Variables cols and vals Are Arrays
  insertOne: function(cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

// Export The Database Functions For The Controller (burgers_controller.js)
module.exports = burger;