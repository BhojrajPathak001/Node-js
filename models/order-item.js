const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const OrderItem = sequelize.define(
  "orderItem",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    quantity: Sequelize.INTEGER,
  },
  {
    timestamps: false,
  }
);
module.exports = OrderItem;
