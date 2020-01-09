var orm = require("../config/orm.js");

var burger = {
    all: function(cb){
        orm.all("burgers", function(res) {
            cb(res);
        });
    },
    update: function(condition, cb){
        orm.update("burgers", "devoured = true", condition, cb)
    },
    create: function(vals, cb){
        orm.create("burgers", vals, cb)
    }
}

module.exports = burger;