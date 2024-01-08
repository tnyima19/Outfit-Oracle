"use strict";
const { Model, DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports = (sequelize) => {
  class Sold extends Model {}

  Sold.init(
    {
      buyer_email: {
        type: DataTypes.STRING,
        primaryKey: true,
        references: {
          model: "users",
          key: "email",
        },
      },
      seller_email: {
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
      date_sold: {
        type: DataTypes.TIME,
        primaryKey: true,
      },
    },
    {
      sequelize,
      modelName: "Sold",
      tableName: "sold",
      timestamps: false,
    }
  );

  return Sold;
};
