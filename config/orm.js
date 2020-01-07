var connection = require("./connection.js");

var orm = {
    all: function(tableInput, cb){
        var queryString = `SELECT * FROM ${tableInput};`
        connection.query(queryString, function(err, result) {
            if (err) {
              throw err;
            }
            cb(result);
        });
    },
    update: function(table, objColVals, condition, cb){
        var queryString = `UPDATE ${table} SET ${objColVals} WHERE ${condition};`
        connection.query(queryString, function(err, result) {
            if (err) {
              throw err;
            }
            cb(result);
        });
    }
}

module.exports = orm;