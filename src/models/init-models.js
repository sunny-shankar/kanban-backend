var DataTypes = require("sequelize").DataTypes;

var _list = require("./list");
var _task = require("./task");
var _user = require("./user");

function initModels(sequelize) {
  var list = _list(sequelize, DataTypes);
  var task = _task(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);

  task.belongsTo(list, { as: "list", foreignKey: "list_id" });
  list.hasMany(task, { as: "tasks", foreignKey: "list_id" });
  list.belongsTo(user, { as: "user", foreignKey: "user_id" });
  user.hasMany(list, { as: "lists", foreignKey: "user_id" });

  return {
    list,
    task,
    user,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
