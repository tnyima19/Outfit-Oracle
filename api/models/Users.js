"use strict";
const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Users extends Model {}

  Users.init(
    {
      email: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Users",
      tableName: "users",
      timestamps: false,
    }
  );

  return Users;
};
