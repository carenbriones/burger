var connection = require("./connection.js");

var orm = {
    selectAll: function(tableInput, callback) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function(err, result) {
            if (err) throw err;
            callback(result);
            // console.table(result);
        })
    },
    insertOne: function(tableName, insertCol, insertVal, callback) {
        var queryString = "INSERT INTO ?? (??) VALUE (?)"
        connection.query(queryString, [tableName, insertCol, insertVal], function(err, result) {
            if (err) throw err;
        })
    },
    updateOne: function(tableName, updateCol, updateVal, colName, colVal, callback) {
        var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?"
        connection.query(queryString, [tableName, updateCol, updateVal, colName, colVal], function(err, result) {
            if (err) throw err;
            callback();
        })
    }
};

module.exports = orm;