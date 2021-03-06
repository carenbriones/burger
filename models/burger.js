var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    create: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res) {
            cb(res);
        });
    },
    update: function(objColVal, condition, cb) {
        orm.updateOne("burgers", objColVal, condition, function(res) {
            cb(res);
        });
    }
};

// Export the database functions for the controller (burgersController.js).
module.exports = burger;