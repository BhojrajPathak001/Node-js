const Sequelize = require("sequelize");
const sequelize = new Sequelize("node_complete", "root", "997760", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
