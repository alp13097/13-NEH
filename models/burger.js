var orm = require("../config/orm.js");

var burgers = {
    all(cb) {
        orm.all("burgers", function(res) {
            cb(res);
        });
    },
    create(cols, vals, cb) {
        orm.create("burgers", cols, vals, function(res) {
            cb(res);
        });
    },
    update(objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function(res) {
            cb(res);
        });
    }
};

module.exports = burgers;