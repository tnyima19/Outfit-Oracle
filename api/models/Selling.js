"use strict";
const { Model, DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports = (sequelize) => {
  class Selling extends Model {}

  Selling.init(
    {
      email: {
        type: DataTypes.STRING,
        primaryKey: true,
        references: {
          model: "users",
          key: "email",
        },
      },
      product_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: "products",
          key: "id",
        },
      },
      quantity: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        validate: {
          min: {
            args: [1],
            msg: "Quantity must be at least 1",
          },
        },
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: {
            args: [1],
            msg: "Price must be at least 1",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Selling",
      tableName: "selling",
      timestamps: false,
    }
  );

  return Selling;
};
