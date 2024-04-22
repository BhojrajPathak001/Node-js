const Sequelize = require("sequelize");

const sequelize = new Sequelize();

const User = sequelize.define("user", {
  id: {
    type: sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: Sequelize.STRING,
  email: Sequelize.STRING,
});
