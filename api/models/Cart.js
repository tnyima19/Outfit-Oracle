"use strict";
const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Cart extends Model {}

  Cart.init(
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
        allowNull: false,
        validate: {
          min: {
            args: [1],
            msg: "quantity must be at least 1",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Cart",
      tableName: "cart",
      timestamps: false,
    }
  );
  return Cart;
};
