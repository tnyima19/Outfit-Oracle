"use strict";
const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Explore extends Model {}

  Explore.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: "products",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Explore",
      tableName: "explore",
      timestamps: false,
    }
  );

  return Explore;
};
