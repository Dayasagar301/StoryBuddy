const { DataTypes } = require("sequelize");
const { sequelize } = require("../utils/db.config");

const Users = sequelize.define("Users", {
  _id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  username: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.STRING, allowNull: false },
});

module.exports = { Users };
